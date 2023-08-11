import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  depth?: number;
}

function BulletedList({ className, depth = 1, children, ...rest }: Props) {
  return (
    <div className={cx('list-block', { 'list-nested': depth > 1 }, className)} {...rest}>
      <div className={cx('bullet-point', `bullet-${depth % 3}`)} />
      <Text placeholder='리스트' style={{ marginTop: 0 }}>
        {children as string}
      </Text>
    </div>
  );
}

export default BulletedList;
