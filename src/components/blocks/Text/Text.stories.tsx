import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'blocks/Text',
  parameters: {
    componentSubtitle: 'Text 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Basics: Story = {
  render: (args) => {
    return (
      <div>
        <Text placeholder='텍스트를 입력하세요' {...args} />
      </div>
    );
  },
};
