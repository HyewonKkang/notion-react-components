import React, { HTMLAttributes, cloneElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Code.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {}

function Code({ children, ...rest }: Props) {
  return (
    <div className={cx('code-wrapper')}>
      <code contentEditable spellCheck suppressContentEditableWarning {...rest}>
        {children}
      </code>
    </div>
  );
}

export default Code;
