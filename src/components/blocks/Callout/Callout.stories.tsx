import { withKnobs } from '@storybook/addon-knobs';
import Callout from './Callout';
import Text from '../Text';
import { BulletedList } from '../List';

export default {
  title: 'Components/Callout',
  component: Callout,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Callout 컴포넌트',
  },
};

export function Basics() {
  return (
    <div>
      <Callout />
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
}
