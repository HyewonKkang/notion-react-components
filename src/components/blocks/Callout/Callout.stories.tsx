import type { Meta, StoryObj } from '@storybook/react';
import { notionColorSelection, tableColorType } from 'src/stories/utils';
import Callout from './Callout';
import Text from '../Text';
import { BulletedList } from '../List';

const meta: Meta<typeof Callout> = {
  title: 'blocks/Callout',
  parameters: {
    componentSubtitle: 'Callout 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Callout,
  argTypes: {
    backgroundColor: tableColorType,
    fontColor: tableColorType,
    emoji: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Basics: Story = {
  render: (args) => {
    const { backgroundColor, fontColor } = args;
    return (
      <div>
        <Callout backgroundColor={backgroundColor} fontColor={fontColor} />
      </div>
    );
  },
};

Basics.argTypes = {
  fontColor: notionColorSelection,
  backgroundColor: notionColorSelection,
};

export const Styled: Story = {
  render: () => {
    return (
      <div>
        <Callout emoji='⛔' fontColor='red' backgroundColor='red'>
          <Text>Read this first!!!</Text>
        </Callout>
        <Callout backgroundColor='yellow' emoji='👉'>
          <Text>
            이모지와 블록의 색은 원하는 대로 손쉽게 변경할 수 있습니다. 마지막으로 사용한 색 또는
            이모지가 기본 설정으로 적용됩니다.
          </Text>
        </Callout>
        <Callout backgroundColor='blue'>
          <Text>콜아웃 블록은</Text>
          <BulletedList>내부 요소로 다양한 블록을 추가할 수 있습니다.</BulletedList>
        </Callout>
      </div>
    );
  },
};
