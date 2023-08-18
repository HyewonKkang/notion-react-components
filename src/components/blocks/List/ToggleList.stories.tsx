import type { Meta, StoryObj } from '@storybook/react';
import ToggleList from './ToggleList';
import Text from '../Text';
import Callout from '../Callout';

const meta: Meta<typeof ToggleList> = {
  title: 'blocks/ToggleList',
  parameters: {
    componentSubtitle: 'ToggleList 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: ToggleList,
  argTypes: {
    header: { control: false },
    open: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleList>;

export const Basics: Story = {
  render: () => {
    return (
      <div>
        <ToggleList
          header='이는 토글의 예시입니다. 이 작은 삼각형을 클릭하면 토글이 열립니다.'
          onTextChange={(text) => console.log(text)}
        >
          <Text onTextChange={(text) => console.log(text)}>
            여기에 무엇이든(이미지, 임베드 등) 추가할 수 있으며 삼각형을 다시 클릭하여 숨길 수도
            있습니다.
          </Text>
        </ToggleList>
        <ToggleList open header='토글 안에 모든 종류의 콘텐츠 블록을 넣을 수 있습니다.'>
          <>
            <Text>
              여기에 무엇이든(이미지, 임베드 등) 추가할 수 있으며 삼각형을 다시 클릭하여 숨길 수도
              있습니다.
            </Text>
            <Callout emoji='😅' />
          </>
        </ToggleList>
      </div>
    );
  },
};

export const Nested: Story = {
  render: () => {
    const commonProps = {
      header: '리스트입니다.',
      open: true,
    };
    return (
      <div>
        <ToggleList {...commonProps}>
          <ToggleList {...commonProps}>
            <Text>내부입니다.</Text>
            <ToggleList {...commonProps}>
              <ToggleList {...commonProps}>
                <ToggleList {...commonProps}>
                  <ToggleList {...commonProps}>
                    <Text>리스트입니다.</Text>
                  </ToggleList>
                </ToggleList>
              </ToggleList>
            </ToggleList>
          </ToggleList>
        </ToggleList>
      </div>
    );
  },
};
