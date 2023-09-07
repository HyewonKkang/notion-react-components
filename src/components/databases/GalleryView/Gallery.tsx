/* eslint-disable react/no-array-index-key */
import { HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Gallery.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/icons/view-plus.svg';
import GalleryItem from './GalleryItem';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  showTitle?: boolean;
  items?: Array<GalleryItemInfo>;
  properties?: DatabaseProperties;
}

function Gallery({ title, showTitle, children, className, items, properties, ...rest }: Props) {
  return (
    <div className={cx('gallery-wrapper', className)} {...rest}>
      {showTitle && (
        <div className={cx('gallery-view-title', `${title ? 'filled' : ''}`)}>
          {title || '제목 없음'}
        </div>
      )}
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
