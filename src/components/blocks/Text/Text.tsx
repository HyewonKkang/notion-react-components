import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Text.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  strikeThrough?: boolean;
}

function Text({ strikeThrough = false, children, ...rest }: Props) {
  return (
    <div
      className={cx('text', `${strikeThrough ? 'strike-through' : ''}`)}
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
