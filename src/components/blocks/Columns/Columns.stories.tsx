import type { Meta, StoryObj } from '@storybook/react';
import Text from '../Text';
import Columns from './Columns';
import Heading from '../Heading/Heading';
import ChildPage from '../ChildPage/ChildPage';

const meta: Meta<typeof Columns> = {
  title: 'blocks/Columns',
  parameters: {
    componentSubtitle: 'Columns 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Columns,
  argTypes: {
    divisionCount: { control: 'select', options: [2, 3, 4, 5] },
  },
};

export default meta;
type Story = StoryObj<typeof Columns>;

export const Basics: Story = {
  render: (args) => {
    return (
      <div>
        <Columns divisionCount={args.divisionCount}>
          <Columns.Segment>
            <Text placeholder='텍스트를 입력하세요' />
          </Columns.Segment>
          <Columns.Segment>
            <Text placeholder='텍스트를 입력하세요' />
          </Columns.Segment>
          <Columns.Segment>
            <Text placeholder='텍스트를 입력하세요' />
          </Columns.Segment>
          <Columns.Segment>
            <Text placeholder='텍스트를 입력하세요' />
          </Columns.Segment>
          <Columns.Segment>
            <Text placeholder='텍스트를 입력하세요' />
          </Columns.Segment>
        </Columns>
      </div>
    );
  },
};

export const Styled: Story = {
  render: (args) => {
    return (
      <div>
        <Heading tag='h2'>도움말과 지원</Heading>
        <Text>
          Notion에서는 원하는 방식으로 문서를 작성하고 도구나 시스템을 구성할 수 있습니다.
          <br />
          다음은 세 개의 columns로 나누었을 때 보여지는 화면입니다.
        </Text>
        <Columns divisionCount={3}>
          <Columns.Segment>
            <Heading tag='h4'>Column 1</Heading>
            <ChildPage title='인용' href='#' icon='👩‍💻' />
            <ChildPage title='콜아웃 블럭 다루기' href='#' icon='🙈' />
            <ChildPage title='어서오세요' href='#' icon='☀️' />
            <ChildPage title='감사합니다' href='#' icon='🍒' />
          </Columns.Segment>
          <Columns.Segment>
            <Heading tag='h4'>Column 2</Heading>
            <ChildPage title='노션 방문하기' href='#' />
            <ChildPage title='깃허브 방문하기' href='#' />
            <ChildPage title='포트폴리오 구경하기' href='#' />
            <ChildPage title='기술 블로그 구경하기' href='#' />
          </Columns.Segment>
          <Columns.Segment>
            <Heading tag='h4'>Column 3</Heading>
            <ChildPage title='Bulleted List' href='#' />
            <ChildPage title='Numbered List' href='#' />
            <ChildPage title='Toggle List' href='#' icon='💌' />
          </Columns.Segment>
          <Columns.Segment>
            <Text placeholder='텍스트를 입력하세요' />
          </Columns.Segment>
        </Columns>
      </div>
    );
  },
};

Styled.argTypes = {
  divisionCount: { control: false },
};
