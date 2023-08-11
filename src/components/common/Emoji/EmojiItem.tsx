/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HTMLAttributes, MouseEvent } from 'react';
import classnames from 'classnames/bind';
import styles from './Emoji.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: string;
}

function EmojiItem({ icon, className, style, ...rest }: Props) {
  return (
    <div className={cx('icon', 'emoji-item', 'has-hover', className)} role='button' {...rest}>
      <span>{icon}</span>
    </div>
  );
}

export default EmojiItem;
