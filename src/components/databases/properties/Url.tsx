import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Properties.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  link: GalleryItemInfo['url'];
}

function Url({ className, link, ...rest }: Props) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className={cx('url', className)}
      {...rest}
    >
      {link}
    </a>
  );
}

export default Url;
