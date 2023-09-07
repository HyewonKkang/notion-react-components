import type { Meta, StoryObj } from '@storybook/react';
import Gallery from './Gallery';

const meta: Meta<typeof Gallery> = {
  title: 'databases/Gallery',
  parameters: {
    componentSubtitle: 'Gallery 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Gallery,
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Basics: Story = {
  render: () => {
    return (
      <div>
        <Gallery
          properties={{
            select: true,
            multiSelect: true,
            text: true,
            status: true,
            date: true,
            url: true,
          }}
          items={[
            {
              title: '제목 없음',
              href: '#',
              thumbnail:
                'https://images.unsplash.com/photo-1691380302079-2d70e95f27d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NDAwNDc5MA&ixlib=rb-4.0.3&q=80&w=1080',
              select: { tag: 'Happy' },
              multiSelect: [
                { tag: 'One', color: 'blue' },
                { tag: 'Two', color: 'red' },
                { tag: 'Three', color: 'green' },
              ],
            },
            {
              title: '제목 없음2',
              href: '#',
              icon: '😴',
              date: new Date(),
              status: { tag: 'progress' },
            },
            {
              title: '제목 없음3',
              href: '#',
              icon: '🌈',
              status: { tag: 'todo', color: 'purple' },
              url: 'https://itpak.tistory.com/725',
              text: 'Hello World',
            },
          ]}
        />
      </div>
    );
  },
};
