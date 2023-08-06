import React, { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Icon.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icon?: string;
}

function Icon({ icon = '💡', ...rest }: Props) {
  return (
    <div className={cx('icon')} role='button' {...rest}>
      <span>{icon}</span>
    </div>
  );
}

export default Icon;
