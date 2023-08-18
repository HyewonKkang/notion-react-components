import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import { ContentEditableChangeEvent } from 'src/hooks/useContentEditable';
import styles from './List.module.css';
import Text from '../Text';
import { numberToAlphabet, numberToRoman } from './utils';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  number?: number;
  depth?: number;
  content?: string;
  onTextChange?: ContentEditableChangeEvent;
}

function NumberedList({
  number = 1,
  depth = 1,
  content,
  className,
  children,
  onTextChange,
  ...rest
}: Props) {
  const numberValue =
    // eslint-disable-next-line no-nested-ternary
    depth % 3 === 1 ? number : depth % 3 === 2 ? numberToAlphabet(number) : numberToRoman(number);

  return (
    <div
      className={cx('list-block', { 'list-nested': depth > 1 }, className)}
      contentEditable={false}
      {...rest}
    >
      <div className={cx('item-number')} data-number={`${numberValue}.`} contentEditable={false} />
      <div>
        <Text placeholder='리스트' style={{ marginTop: 0 }} onTextChange={onTextChange}>
          {content}
        </Text>
        {children}
      </div>
    </div>
  );
}

export default NumberedList;
