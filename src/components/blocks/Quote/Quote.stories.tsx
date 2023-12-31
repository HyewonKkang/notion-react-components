import type { Meta, StoryObj } from '@storybook/react';
import Quote from './Quote';
import Heading from '../Heading';
import Divider from '../Divider/Divider';
import Text from '../Text';

const meta: Meta<typeof Quote> = {
  title: 'blocks/Quote',
  parameters: {
    componentSubtitle: 'Quote 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Quote,
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Basics: Story = {
  render: () => {
    return (
      <div>
        <Heading tag='h3'>React</Heading>
        <Divider />
        <Quote>
          <Text>
            React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각
            상태에 대한 간단한 뷰만 설계하세요. 그럼 React는 데이터가 변경됨에 따라 적절한
            컴포넌트만 효율적으로 갱신하고 렌더링합니다. 선언형 뷰는 코드를 예측 가능하고 디버그하기
            쉽게 만들어 줍니다.
          </Text>
          <Text>
            출처: <a href='https://ko.legacy.reactjs.org/'>React 공식 문서</a>
          </Text>
        </Quote>
      </div>
    );
  },
};
