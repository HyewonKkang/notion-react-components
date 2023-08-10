import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Text.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  strikeThrough?: boolean;
}

function Text({ strikeThrough = false, className, children, style, ...rest }: Props) {
  return (
    <div
      style={{ ...style }}
      className={cx('text', `${strikeThrough ? 'strike-through' : ''}`, className)}
      contentEditable
      spellCheck
      suppressContentEditableWarning
      {...rest}
    >
      {children}
    </div>
  );
}

export default Text;
