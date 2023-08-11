import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  depth?: number;
  content?: string;
}

function BulletedList({ className, content, depth = 1, children, ...rest }: Props) {
  return (
    <div
      className={cx('list-block', { 'list-nested': depth > 1 }, className)}
      contentEditable={false}
      {...rest}
    >
      <div className={cx('bullet-point', `bullet-${depth % 3}`)} contentEditable={false} />
      <div>
        <Text placeholder='리스트' style={{ marginTop: 0 }}>
          {content}
        </Text>
        {children}
      </div>
    </div>
  );
}

export default BulletedList;
