import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';
import { numberToAlphabet, numberToRoman } from './utils';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  number?: number;
  depth?: number;
}

function NumberedList({ number = 1, depth = 1, className, children, ...rest }: Props) {
  const numberValue =
    // eslint-disable-next-line no-nested-ternary
    depth % 3 === 1 ? number : depth % 3 === 2 ? numberToAlphabet(number) : numberToRoman(number);

  return (
    <div className={cx('list-block', { 'list-nested': depth > 1 }, className)} {...rest}>
      <div className={cx('item-number')} data-number={`${numberValue}.`} />
      <Text placeholder='리스트' style={{ marginTop: 0 }}>
        {children as string}
      </Text>
    </div>
  );
}

export default NumberedList;
