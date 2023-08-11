import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'blocks/Media',
  parameters: {
    componentSubtitle: 'Image 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: Image,
};

export default meta;
type Story = StoryObj<typeof Image>;

export const ImageMedia: Story = {
  render: () => {
    return (
      <div>
        <Image />
        <Image src='https://www.notion.so/images/page-cover/nasa_tim_peake_spacewalk.jpg' />
      </div>
    );
  },
};
