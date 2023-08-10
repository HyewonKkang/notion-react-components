import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {}

function BulletedList({ className, children, ...rest }: Props) {
  return (
    <div className={cx('list-block', className)} {...rest}>
      <div className={cx('bullet-point')} />
      <Text placeholder='리스트' style={{ marginTop: 0 }}>
        {children as string}
      </Text>
    </div>
  );
}

export default BulletedList;
