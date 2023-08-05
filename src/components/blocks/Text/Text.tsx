import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Text.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: string;
}

function Text({ children, ...rest }: Props) {
  return (
    <div className={cx('text')} {...rest} contentEditable spellCheck suppressContentEditableWarning>
      {children}
    </div>
  );
}

export default Text;
