import type { Meta, StoryObj } from '@storybook/react';
import Text from '../Text';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'blocks/Heading',
  parameters: {
    componentSubtitle: 'Heading 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Heading,
  argTypes: {
    tag: { control: 'select', options: ['h1', 'h2', 'h3', 'h4'] },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Basics: Story = {
  render: (args) => {
    const { tag } = args;
    return (
      <div>
        <Heading tag={tag || 'h2'} onTextChange={(text) => console.log(text)} />
        <Text onTextChange={(text) => console.log(text)}>
          제목의 사이즈는 h1, h2, h3, h4 중 선택 가능합니다.
        </Text>
        <Text>h1은 페이지 타이틀에 사용됩니다.</Text>
      </div>
    );
  },
};

export const Headings: Story = {
  render: (args) => {
    return (
      <div>
        <Heading tag='h2'>제목1 입니다.</Heading>
        <Heading tag='h3'>제목2 입니다.</Heading>
        <Heading tag='h4'>제목3 입니다.</Heading>
        <Text>일반 텍스트 블록입니다.</Text>
      </div>
    );
  },
};

Headings.argTypes = {
  tag: { control: false },
};
