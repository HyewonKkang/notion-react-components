import type { Meta, StoryObj } from '@storybook/react';
import File from './File';

const meta: Meta<typeof File> = {
  title: 'blocks/Media',
  parameters: {
    componentSubtitle: 'File 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: File,
};

export default meta;
type Story = StoryObj<typeof File>;

export const FileMedia: Story = {
  render: () => {
    return (
      <div>
        <File />
        <File src='http://www.e-ffyc.re.kr/xml/03711/03711.pdf' />
      </div>
    );
  },
};
