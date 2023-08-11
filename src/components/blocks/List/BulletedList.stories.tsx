import type { Meta, StoryObj } from '@storybook/react';
import BulletedList from './BulletedList';

const meta: Meta<typeof BulletedList> = {
  title: 'blocks/BulletedList',
  parameters: {
    componentSubtitle: 'BulletedList 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: BulletedList,
};

export default meta;
type Story = StoryObj<typeof BulletedList>;

export const Basics: Story = {
  render: () => {
    return (
      <div>
        <BulletedList content='BulletedList는 글머리 기호 목록으로 간단한 글머리 기호 목록이 생성됩니다' />
        <BulletedList content='글머리 기호의 자식 요소로 글머리 기호가 있는 경우 들여쓰기가 적용되고 기호가 변경됩니다.' />
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
          <BulletedList depth={2}>
            <BulletedList depth={3}>
              <BulletedList depth={4} />
            </BulletedList>
          </BulletedList>
          <BulletedList depth={2} />
          <BulletedList depth={2} />
          <BulletedList depth={2} />
        </BulletedList>
      </div>
    );
  },
};
