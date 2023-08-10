import type { Meta, StoryObj } from '@storybook/react';
import ToggleList from './ToggleList';
import Text from '../Text';
import Callout from '../Callout';

const meta: Meta<typeof ToggleList> = {
  title: 'blocks/List',
  parameters: {
    componentSubtitle: 'ToggleList 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: ToggleList,
  argTypes: {
    contents: { control: false },
    open: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleList>;

export const Toggle: Story = {
  render: () => {
    return (
      <div>
        <ToggleList
          contents={
            <Text>
              여기에 무엇이든(이미지, 임베드 등) 추가할 수 있으며 삼각형을 다시 클릭하여 숨길 수도
              있습니다.
            </Text>
          }
        >
          이는 토글의 예시입니다. 이 작은 삼각형을 클릭하면 토글이 열립니다.
        </ToggleList>
        <ToggleList
          open
          contents={
            <>
              <Text>
                여기에 무엇이든(이미지, 임베드 등) 추가할 수 있으며 삼각형을 다시 클릭하여 숨길 수도
                있습니다.
              </Text>
              <Callout emoji='😅' />
            </>
          }
        >
          토글 안에 모든 종류의 콘텐츠 블록을 넣을 수 있습니다.
        </ToggleList>
      </div>
    );
  },
};
