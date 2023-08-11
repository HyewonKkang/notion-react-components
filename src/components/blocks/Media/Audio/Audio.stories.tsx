import type { Meta, StoryObj } from '@storybook/react';
import Audio from './Audio';

const meta: Meta<typeof Audio> = {
  title: 'blocks/Media',
  parameters: {
    componentSubtitle: 'Audio 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Audio,
};

export default meta;
type Story = StoryObj<typeof Audio>;

export const AudioMedia: Story = {
  render: () => {
    return (
      <div>
        <Audio />
      </div>
    );
  },
};
