import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Columns.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

function ColumnsSegment({ size, className, children, ...rest }: Props) {
  return (
    <div className={cx('segment', `segment-${size}`, className)} {...rest}>
      {children}
    </div>
  );
}

export default ColumnsSegment;
