import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  number?: number;
}

function NumberedList({ number = 1, className, children, ...rest }: Props) {
  return (
    <div className={cx('list-block', className)} {...rest}>
      <div className={cx('item-number')} data-number={`${number}.`} />
      <Text placeholder='리스트' style={{ marginTop: 0 }}>
        {children as string}
      </Text>
    </div>
  );
}

export default NumberedList;
