/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HTMLAttributes, useState } from 'react';
import classnames from 'classnames/bind';
import useModal from 'src/hooks/useModal';
import styles from './Emoji.module.css';
import EmojiPicker from './EmojiPicker';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icon?: string;
  width?: number;
  height?: number;
  hoverable?: boolean;
}

function Emoji({
  icon = '💡',
  width = 24,
  height,
  hoverable = true,
  className,
  style,
  ...rest
}: Props) {
  const { ref, isOpen, openModal, setIsOpen, buttonPosition } = useModal({
    initialMode: false,
    horizontal: 'left',
  });
  const [emoji, setEmoji] = useState<string>(icon);

  const handleSelectEmoji = (newEmoji: string) => {
    setIsOpen(false);
    setEmoji(newEmoji);
  };

  return (
    <>
      <div
        className={cx('icon', { 'has-hover': hoverable }, className)}
        role='button'
        style={{ width: `${width}px`, height: `${height}px`, ...style }}
        onClick={hoverable ? openModal : undefined}
        {...rest}
      >
        <span>{emoji}</span>
      </div>
      {isOpen && (
        <EmojiPicker ref={ref} style={buttonPosition} handleSelectEmoji={handleSelectEmoji} />
      )}
    </>
  );
}

export default Emoji;
