import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Properties.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  children: string;
}

function Text({ className, children, ...rest }: Props) {
  return (
    <div className={cx('text')}>
      <span>{children}</span>
    </div>
  );
}

export default Text;
