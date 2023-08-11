import { ForwardedRef, HTMLAttributes, cloneElement, forwardRef, ReactElement } from 'react';
import classnames from 'classnames/bind';
import useTabs from 'src/hooks/useTabs';
import styles from '../Media.module.css';
import UploadContent from './UploadContent';
import LinkEmbedContent from './LinkEmbedContent';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  items: Array<TabItem>;
  type: MediaType;
  onFileLoaded?: (file: string | ArrayBuffer | null) => void;
  getFileInfo?: (file: File) => void;
}

function MediaModal(
  { items, type, className, onFileLoaded, getFileInfo, ...rest }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { activeTabKey, setActiveTab } = useTabs({ items });

  return (
    <div className={cx('media-modal-wrapper')}>
      <div
        className={cx('media-modal', `${type}-modal`, className)}
        {...rest}
        ref={ref}
        role='dialog'
      >
        <div className={cx('media-menu')}>
          {items.length > 1 && (
            <div className={cx('menu-tab')}>
              {items.map((item: TabItem) => {
                const { key, label } = item;
                return (
                  <div
                    className={cx('menu-tab-item', { selected: activeTabKey === key })}
                    key={key}
                  >
                    <button type='button' onClick={() => setActiveTab(key)}>
                      {label}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <div className={cx('content')}>
            {(items[activeTabKey].children as ReactElement)?.type === UploadContent ||
            (items[activeTabKey].children as ReactElement)?.type === LinkEmbedContent
              ? cloneElement(items[activeTabKey].children as ReactElement, {
                  onFileLoaded,
                  type,
                  getFileInfo,
                })
              : items[activeTabKey].children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(MediaModal);
