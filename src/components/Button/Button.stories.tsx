// src/components/Button/Button.stories.tsx

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export function Basics() {
  const props = {
    disabled: boolean('disabled', false),
  };

  return (
    <div>
      <Button {...props} />
    </div>
  );
}
