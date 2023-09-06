/* eslint-disable react/no-array-index-key */
import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Gallery.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/icons/view-plus.svg';
import GalleryItem from './GalleryItem';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  items?: Array<GalleryItemInfo>;
  properties?: DatabaseProperties;
}

function Gallery({ children, className, items, properties, ...rest }: Props) {
  return (
    <div className={cx('gallery-wrapper', className)} {...rest}>
      <div className={cx('gallery-view')}>
        {items?.map((item, index) => (
          <GalleryItem item={item} key={index} properties={properties} />
        ))}
        <button className={cx('gallery-new-button')}>
          <div>
            <PlusIcon className={cx('plus-icon')} />
            <span>새로 만들기</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
