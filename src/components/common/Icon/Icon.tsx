import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Icon.module.css';

const cx = classnames.bind(styles);

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  width?: number;
  height?: number;
  hoverable?: boolean;
}

function Icon({
  icon = '💡',
  width = 24,
  height,
  hoverable = true,
  className,
  style,
  ...rest
}: Props) {
  return (
    <button
      className={cx('icon', { 'has-hover': hoverable }, className)}
      type='button'
      style={{ width: `${width}px`, height: `${height}px`, ...style }}
      {...rest}
    >
      <span>{icon}</span>
    </button>
  );
}

export default Icon;
