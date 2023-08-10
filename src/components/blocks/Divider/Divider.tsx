import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Divider.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {}

function Divider({ className, ...rest }: Props) {
  return (
    <div className={cx('divider-block', className)} {...rest}>
      <div className={cx('divider')} />
    </div>
  );
}

export default Divider;
