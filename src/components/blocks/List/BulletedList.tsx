import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import { ContentEditableChangeEvent } from 'src/hooks/useContentEditable';
import styles from './List.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  depth?: number;
  content?: string;
  onTextChange?: ContentEditableChangeEvent;
}

function BulletedList({ className, content, depth = 1, children, onTextChange, ...rest }: Props) {
  return (
    <div
      className={cx('list-block', { 'list-nested': depth > 1 }, className)}
      contentEditable={false}
      {...rest}
    >
      <div className={cx('bullet-point', `bullet-${depth % 3}`)} contentEditable={false} />
      <div>
        <Text placeholder='리스트' style={{ marginTop: 0 }} onTextChange={onTextChange}>
          {content}
        </Text>
        {children}
      </div>
    </div>
  );
}

export default BulletedList;
