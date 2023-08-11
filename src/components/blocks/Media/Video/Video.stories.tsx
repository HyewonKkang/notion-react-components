import type { Meta, StoryObj } from '@storybook/react';
import Video from './Video';

const meta: Meta<typeof Video> = {
  title: 'blocks/Media',
  parameters: {
    componentSubtitle: 'Video 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Video,
};

export default meta;
type Story = StoryObj<typeof Video>;

export const VideoMedia: Story = {
  render: () => {
    return (
      <div>
        <Video />
        <Video src='https://www.youtube.com/embed/w6X0b2ESKi4' />
      </div>
    );
  },
};
