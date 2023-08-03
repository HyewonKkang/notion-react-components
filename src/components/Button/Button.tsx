import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.css';

const cx = classnames.bind(styles);

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  underline?: boolean;
}
function Button({ disabled = false, underline = true, children, type = 'button', ...rest }: Props) {
  return (
    <button className={cx('button')} {...rest}>
      hello world
    </button>
  );
}

export default Button;
