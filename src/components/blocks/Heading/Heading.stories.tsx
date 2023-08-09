import { withKnobs } from '@storybook/addon-knobs';
import Heading from './Heading';
import Text from '../Text';

export default {
  title: 'Components/Heading',
  component: Heading,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Heading 컴포넌트',
  },
};

export function Basics() {
  return (
    <div>
      <Heading tag='h2'>제목1 입니다.</Heading>
      <Heading tag='h3'>제목2 입니다.</Heading>
      <Heading tag='h4'>제목3 입니다.</Heading>
      <Text>일반 텍스트 블록입니다.</Text>
    </div>
  );
}
