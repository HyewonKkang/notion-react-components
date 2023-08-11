import type { Meta, StoryObj } from '@storybook/react';
import NumberedList from './NumberedList';

const meta: Meta<typeof NumberedList> = {
  title: 'blocks/List/Numbered',
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

export const Numbered: Story = {
  render: (args) => {
    return (
      <div>
        <NumberedList {...args}>
          번호 매기기 목록은 번호가 매겨진 목록을 생성할 수 있습니다. 번호를 props로 전달합니다.
        </NumberedList>
      </div>
    );
  },
};

export const Nested: Story = {
  render: () => {
    return (
      <div>
        <NumberedList>
          리스트입니다.
          <NumberedList depth={2}>
            리스트입니다.
            <NumberedList depth={3}>
              리스트입니다.
              <NumberedList depth={4}>리스트입니다.</NumberedList>
            </NumberedList>
          </NumberedList>
        </NumberedList>
      </div>
    );
  },
};

Nested.argTypes = {
  number: { control: false },
  depth: { control: false },
};
