import { withKnobs } from '@storybook/addon-knobs';
import Divider from './Divider';
import Text from '../Text';
import Heading from '../Heading';

export default {
  title: 'Components/Divider',
  component: Divider,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Divider 컴포넌트',
  },
};

export function Basics() {
  return (
    <div>
      <Heading tag='h2'>구분선의 역할</Heading>
      <Text>구분선은 블록을 시각적으로 나눕니다.</Text>
      <Divider />
      <Heading tag='h2'>구분선의 역할</Heading>
      <Text>구분선은 블록을 시각적으로 나눕니다.</Text>
    </div>
  );
}
