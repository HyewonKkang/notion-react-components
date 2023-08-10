import type { Meta, StoryObj } from '@storybook/react';
import NumberedList from './NumberedList';

const meta: Meta<typeof NumberedList> = {
  title: 'blocks/List',
  parameters: {
    componentSubtitle: 'NumberedList 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: NumberedList,
  argTypes: { number: { control: { type: 'number' } } },
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
