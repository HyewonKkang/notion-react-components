import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Properties.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  children: string;
  color?: TagColor;
}

function Select({ className, color = 'gray', children, ...rest }: Props) {
  return (
    <div className={cx('select-wrapper', color, className)} {...rest}>
      <div className={cx('select')}>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Select;
