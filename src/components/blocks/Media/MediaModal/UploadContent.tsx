import { HTMLAttributes, ChangeEvent, useState } from 'react';
import classnames from 'classnames/bind';
import styles from '../Media.module.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  buttonText: string;
  type?: string;
  onFileLoaded?: (file: string | ArrayBuffer | null) => void;
  getFileInfo?: (file: File) => void;
}

const cx = classnames.bind(styles);

function UploadContent({ buttonText, type, className, getFileInfo, onFileLoaded, ...rest }: Props) {
  const onUploadContent = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];

    if (!file) return;

    if (type === 'file') getFileInfo?.(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      onFileLoaded?.(reader.result);
    };
  };

  const AcceptByType: Record<string, string> = {
    image: 'image/jpg, image/png, image/jpeg',
    video: 'video/*',
    audio: 'audio/*',
    file: '',
  };

  return (
    <div className={cx('upload', className)} {...rest}>
      <label htmlFor='file'>
        <button type='button' className={cx({ 'blue-button': type !== 'image' })}>
          {buttonText}
        </button>
      </label>
      <input
        type='file'
        name='file'
        id='file'
        accept={type ? AcceptByType[type] : ''}
        className={cx('input-file')}
        onChange={onUploadContent}
      />
    </div>
  );
}

export default UploadContent;
