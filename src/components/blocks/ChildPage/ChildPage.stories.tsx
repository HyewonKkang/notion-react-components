import type { Meta, StoryObj } from '@storybook/react';
import ChildPage from './ChildPage';

const meta: Meta<typeof ChildPage> = {
  title: 'blocks/ChildPage',
  parameters: {
    componentSubtitle: 'ChildPage 컴포넌트',
    controls: { expanded: true, hideNoControlsWarning: true, sort: 'requiredFirst' },
  },
  component: ChildPage,
  argTypes: {
    href: { control: false },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ChildPage>;

export const Basics: Story = {
  render: (args) => {
    return (
      <div>
        <ChildPage href='' title={args.title} />
      </div>
    );
  },
};
