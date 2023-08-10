import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';
import Text from '../Text';
import Heading from '../Heading';

const meta: Meta<typeof Divider> = {
  title: 'blocks/Divider',
  parameters: {
    componentSubtitle: 'Divider 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Basics: Story = {
  render: () => {
    return (
      <div>
        <Heading tag='h2'>구분선의 역할</Heading>
        <Text>구분선은 블록을 시각적으로 나눕니다.</Text>
        <Divider />
        <Heading tag='h2'>구분선의 역할</Heading>
        <Text>구분선은 블록을 시각적으로 나눕니다.</Text>
      </div>
    );
  },
};
