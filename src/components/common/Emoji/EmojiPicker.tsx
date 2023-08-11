import { ForwardedRef, HTMLAttributes, forwardRef, MouseEvent } from 'react';
import classnames from 'classnames/bind';
import emojiByGroup from 'src/assets/emoji.json';
import styles from './Emoji.module.css';
import EmojiItem from './EmojiItem';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  handleSelectEmoji: (emoji: string) => void;
}

function EmojiPicker(
  { className, handleSelectEmoji, ...rest }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const onClickItem = (e: MouseEvent<HTMLDivElement>, emoji: string) => {
    e.stopPropagation();
    e.preventDefault();
    handleSelectEmoji(emoji);
  };
  return (
    <div className={cx('modal-wrapper')}>
      <div className={cx('emoji-picker-container', className)} ref={ref} role='dialog' {...rest}>
        <div className={cx('emoji-picker')}>
          <div className={cx('emoji-group')}>
            <div className={cx('emoji-group-title')}>최근 사용한 항목</div>
            {/* TODO: 최근 사용한 이모지 저장 */}
            {/* <div className={cx('emoji-group-contents')}>
              {items.map((item) => (
                <Emoji
                  icon={item.emoji}
                  width={32}
                  height={32}
                  key={item.name}
                  className={cx('emoji-button')}
                />
              ))}
            </div> */}
          </div>
          {Object.entries(emojiByGroup).map(([group, items]) => (
            <div className={cx('emoji-group')} key={group}>
              <div className={cx('emoji-group-title')}>{group}</div>
              <div className={cx('emoji-group-contents')}>
                {items.map((item) => (
                  <EmojiItem
                    icon={item.emoji}
                    key={item.name}
                    className={cx('emoji-button')}
                    data-emoji-name={item.name}
                    onClick={(e) => onClickItem(e, item.emoji)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(EmojiPicker);
