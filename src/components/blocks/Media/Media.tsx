import { HTMLAttributes, ReactElement, cloneElement, useState } from 'react';
import classnames from 'classnames/bind';
import useModal from 'src/hooks/useModal';
import styles from './Media.module.css';
import { ReactComponent as DotsIcon } from '../../../assets/icons/dots.svg';
import MediaModal from './MediaModal/MediaModal';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: ReactElement;
  description: string;
  src?: string;
  hasBlockResizer?: boolean;
  embeddedClassName?: string;
  modalItems: Array<TabItem>;
  type: MediaType;
}

function Media({
  src,
  icon,
  description,
  embeddedClassName,
  hasBlockResizer = false,
  children,
  modalItems,
  className,
  type,
  ...rest
}: Props) {
  const [embedded, setEmbedded] = useState<boolean>(!!src);
  const [fileSrc, setFileSrc] = useState<string | ArrayBuffer | null>(src || null);
  const [fileInfo, setFileInfo] = useState<File | null>(null);

  const { ref, isOpen, buttonPosition, openModal } = useModal({
    initialMode: false,
  });

  const onFileLoaded = (file: string | ArrayBuffer | null) => {
    if (file) {
      setEmbedded(true);
      setFileSrc(file);
    }
  };

  const getFileInfo = (file: File) => {
    setFileInfo(file);
  };

  return (
    <div className={cx('media-block', className)} {...rest}>
      {embedded ? (
        <div
          className={cx('embedded', {
            'image-embedded': embeddedClassName === 'image-embedded',
            'video-embedded': embeddedClassName === 'video-embedded',
            'bookmark-embedded': embeddedClassName === 'bookmark-embedded',
            'file-embedded': embeddedClassName === 'file-embedded',
            'audio-embedded': embeddedClassName === 'audio-embedded',
          })}
        >
          <div style={{ width: '100%' }}>
            {type === 'image' || type === 'video' || type === 'audio' || type === 'bookmark'
              ? cloneElement(children as ReactElement, {
                  ...(children as ReactElement).props,
                  src: fileSrc,
                })
              : cloneElement(children as ReactElement, {
                  ...(children as ReactElement).props,
                  src: fileSrc,
                  file: fileInfo,
                })}
          </div>
          {hasBlockResizer && (
            <>
              <div className={cx('block-resizer', 'block-resizer-left')}>
                <div />
              </div>
              <div className={cx('block-resizer', 'block-resizer-right')}>
                <div />
              </div>
            </>
          )}
        </div>
      ) : (
        <div className={cx('media')}>
          <button className={cx('media-button')} onClick={openModal}>
            <div className={cx('inner')}>
              {icon}
              <div className={cx('button-title')}>{description}</div>
            </div>
            <button className={cx('more-icon')}>
              <DotsIcon />
            </button>
          </button>
          {isOpen && (
            <MediaModal
              type={type}
              ref={ref}
              items={modalItems}
              style={buttonPosition}
              onFileLoaded={onFileLoaded}
              getFileInfo={getFileInfo}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Media;
