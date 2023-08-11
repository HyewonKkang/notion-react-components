import { HTMLAttributes, useState } from 'react';
import classnames from 'classnames/bind';
import styles from '../Media.module.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
  buttonText: string;
  type?: string;
  description: string;
  onFileLoaded?: (file: string | ArrayBuffer | null) => void;
  getFileInfo?: (file: File) => void;
}

const cx = classnames.bind(styles);

function LinkEmbedContent({
  placeholder,
  className,
  onFileLoaded,
  buttonText,
  description,
  getFileInfo,
  type,
  ...rest
}: Props) {
  const [inputValue, setInputValue] = useState<string>('');

  const isValidURL = (url: string) => {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlPattern.test(url);
  };

  const onSubmit = () => {
    if (isValidURL(inputValue)) {
      onFileLoaded?.(inputValue);
    }
  };

  return (
    <div className={cx('link', className)} {...rest}>
      <div className={cx('input-outer')}>
        <input
          placeholder={placeholder}
          type='url'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button type='button' onClick={onSubmit}>
        {buttonText}
      </button>
      <p>{description}</p>
    </div>
  );
}

export default LinkEmbedContent;
