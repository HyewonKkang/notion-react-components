import { AnchorHTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Gallery.module.css';
import { Select, MultiSelect, Text, Date, Url, Status } from '../properties';

const cx = classnames.bind(styles);

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  item: GalleryItemInfo;
  properties?: DatabaseProperties;
}

function GalleryItem({ children, className, item, properties, ...rest }: Props) {
  const { title, icon, href, thumbnail, text, select, multiSelect, date, url, status } = item;
  const hasThumbnail = !!thumbnail;
  const shouldRenderSelect = properties?.select && select;
  const shouldRenderMultiSelect = properties?.multiSelect && multiSelect;
  const shouldRenderText = properties?.text && text;
  const shouldRenderStatus = properties?.status && status;
  const shouldRenderDate = properties?.date && date;
  const shouldRenderUrl = properties?.url && url;

  return (
    <a className={cx('gallery-item', className)} href={href} {...rest}>
      <div className={cx('gallery-preview')}>
        {hasThumbnail && <img src={thumbnail} alt='gallery-preview' />}
      </div>
      <div className={cx('gallery-title')}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <div className={cx('gallery-attributes-panel')}>
        {shouldRenderSelect && select && (
          <div>
            <Select color={select.color}>{select.tag}</Select>
          </div>
        )}
        {shouldRenderMultiSelect && <MultiSelect selects={multiSelect} />}
        {shouldRenderText && <Text>{text}</Text>}
        {shouldRenderDate && <Date date={date} />}
        {shouldRenderStatus && <Status status={status} />}
        {shouldRenderUrl && <Url link={url} />}
      </div>
    </a>
  );
}

export default GalleryItem;
