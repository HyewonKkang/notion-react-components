import type { Meta, StoryObj } from '@storybook/react';
import BulletedList from './BulletedList';

const meta: Meta<typeof BulletedList> = {
  title: 'blocks/List/Bulleted',
  parameters: {
    componentSubtitle: 'BulletedList 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: BulletedList,
};

export default meta;
type Story = StoryObj<typeof BulletedList>;

export const Bulleted: Story = {
  render: () => {
    return (
      <div>
        <BulletedList>
          BulletedList는 글머리 기호 목록으로 간단한 글머리 기호 목록이 생성됩니다
        </BulletedList>
        <BulletedList>
          글머리 기호의 자식 요소로 글머리 기호가 있는 경우 들여쓰기가 적용되고 기호가 변경됩니다.
        </BulletedList>
        <BulletedList />
      </div>
    );
  },
};

export const Nested: Story = {
  render: () => {
    return (
      <div>
        <BulletedList>
          리스트입니다.
          <BulletedList depth={2}>
            리스트입니다.
            <BulletedList depth={3}>리스트입니다.</BulletedList>
          </BulletedList>
        </BulletedList>
      </div>
    );
  },
};
