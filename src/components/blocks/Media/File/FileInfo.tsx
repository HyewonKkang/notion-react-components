import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as FileIcon } from 'src/assets/icons/file.svg';
import styles from '../Media.module.css';

const cx = classnames.bind(styles);

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  file?: File;
}

function FileInfo({ src, file, ...rest }: Props) {
  const [info, setInfo] = useState<File | undefined>();
  const openFile = () => window.open(src, '_blank');

  const formatFileSize = (sizeInBytes: number) => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
    let size = sizeInBytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex += 1;
    }

    const formattedSize = unitIndex === 0 ? size : size.toFixed(1);
    const unit = units[unitIndex];

    return `${formattedSize} ${unit}`;
  };

  useEffect(() => {
    setInfo(file);
  }, [file]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {info && (
        <button onClick={openFile} {...rest}>
          <div className={cx('file-icon')}>
            <FileIcon />
          </div>
          <div className={cx('file-info')}>
            <div className={cx('file-name')}>{info.name}</div>
            <div className={cx('file-size')}>{formatFileSize(info.size)}</div>
          </div>
        </button>
      )}
    </>
  );
}

export default FileInfo;
