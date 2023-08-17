import React, { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import Heading from 'src/components/blocks/Heading';
import styles from './TitleBar.module.css';
import Cover from './Cover';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  emoji?: string;
  cover?: string;
  children?: string;
}

function TitleBar({ children, className, emoji, cover, ...rest }: Props) {
  return (
    <>
      {cover ? <Cover imgSrc={cover} /> : <div className={cx('empty-space')} />}
      <div className={cx('wrapper', className)} {...rest}>
        {emoji && (
          <div className={cx('emoji-wrapper')}>
            <div className={cx('emoji', 'no-draggable')}>{emoji}</div>
          </div>
        )}
        <div className={cx('heading-wrapper')}>
          <Heading tag='h1'>{children as string}</Heading>
        </div>
      </div>
    </>
  );
}

export default TitleBar;
