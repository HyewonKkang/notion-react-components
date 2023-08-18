import { HTMLAttributes, useState } from 'react';
import classnames from 'classnames/bind';
import useContentEditable, { ContentEditableChangeEvent } from 'src/hooks/useContentEditable';
import styles from './Text.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  strikeThrough?: boolean;
  onTextChange?: ContentEditableChangeEvent;
}

function Text({ strikeThrough = false, className, children, style, onTextChange, ...rest }: Props) {
  const { contentEditableProps } = useContentEditable(onTextChange);

  return (
    <div
      style={{ ...style }}
      className={cx('text', `${strikeThrough ? 'strike-through' : ''}`, className)}
      {...contentEditableProps}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Text;
