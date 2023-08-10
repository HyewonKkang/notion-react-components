import type { Meta, StoryObj } from '@storybook/react';
import Todo from './Todo';
import Heading from '../Heading/Heading';
import Divider from '../Divider/Divider';

const meta: Meta<typeof Todo> = {
  title: 'blocks/Todo',
  parameters: {
    componentSubtitle: 'Todo 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Todo,
};

export default meta;
type Story = StoryObj<typeof Todo>;

export const Basics: Story = {
  render: () => {
    return (
      <div>
        <Heading tag='h2'>🍌 오늘 할 일</Heading>
        <Divider />
        <Todo checked>코테 1일 1문제</Todo>
        <Todo checked>모던 자바스크립트 딥다이브 40장</Todo>
        <Todo />
      </div>
    );
  },
};
