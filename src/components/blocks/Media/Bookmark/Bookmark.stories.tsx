import type { Meta, StoryObj } from '@storybook/react';
import Bookmark from './Bookmark';

const meta: Meta<typeof Bookmark> = {
  title: 'blocks/Media',
  parameters: {
    componentSubtitle: 'Bookmark 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Bookmark,
};

export default meta;
type Story = StoryObj<typeof Bookmark>;

export const BookmarkMedia: Story = {
  render: () => {
    return (
      <div>
        <Bookmark />
        <Bookmark src='https://ant.design/components/breadcrumb' />
      </div>
    );
  },
};
