import type { Meta, StoryObj } from '@storybook/react';
import NumberedList from './NumberedList';

const meta: Meta<typeof NumberedList> = {
  title: 'blocks/NumberedList',
  parameters: {
    componentSubtitle: 'NumberedList 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: NumberedList,
  argTypes: {
    number: { control: { type: 'number', min: 1 } },
    depth: { control: { type: 'number', min: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof NumberedList>;

export const Basics: Story = {
  render: (args) => {
    return (
      <div>
        <NumberedList
          content='번호 매기기 목록은 번호가 매겨진 목록을 생성할 수 있습니다. 번호를 props로 전달합니다.'
          {...args}
        />
      </div>
    );
  },
};

export const Nested: Story = {
  render: () => {
    return (
      <div>
        <NumberedList>
          <NumberedList content='리스트입니다.' depth={2}>
            <NumberedList depth={3}>
              <NumberedList depth={4} number={1} />
              <NumberedList depth={4} number={2} />
              <NumberedList depth={4} number={3} />
              <NumberedList depth={4} number={4} />
              <NumberedList depth={4} number={5} />
              <NumberedList depth={4} number={6} />
            </NumberedList>
            <NumberedList depth={3} number={2} />
            <NumberedList depth={3} number={3} />
          </NumberedList>
        </NumberedList>
        <NumberedList number={2} />
      </div>
    );
  },
};

Nested.argTypes = {
  number: { control: false },
  depth: { control: false },
};
