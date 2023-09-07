import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Properties.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  date: GalleryItemInfo['date'];
}

function Date({ className, date, ...rest }: Props) {
  const dateFormatted =
    date && `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  return (
    <div className={cx('date', className)} {...rest}>
      <span>{dateFormatted}</span>
    </div>
  );
}

export default Date;
