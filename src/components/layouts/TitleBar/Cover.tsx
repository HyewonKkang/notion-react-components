import React, { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './TitleBar.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
}

function Cover({ imgSrc, ...rest }: Props) {
  return (
    <div className={cx('cover-wrapper')} {...rest}>
      {imgSrc && <img src={imgSrc} alt='cover' />}
    </div>
  );
}

export default Cover;
