import { HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';
import { ReactComponent as ToggleIcon } from '../../../assets/icons/toggle.svg';
import useToggle from '../../../hooks/useToggle';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  contents?: ReactElement;
}

function ToggleList({ contents, ...rest }: Props) {
  const { filled, isCollapsed, handleButtonClick, toggleBodyRef, toggleContentRef } =
    useToggle(contents);

  return (
    <div className={cx('list-block', 'toggle-header')} {...rest}>
      <div className={cx('toggle-icon-wrapper')}>
        <button
          className={cx('toggle-icon', { filled, opened: isCollapsed })}
          aria-label='열기'
          onClick={handleButtonClick}
        >
          <ToggleIcon />
        </button>
      </div>
      <div className={cx('toggle-body-wrapper')}>
        <Text placeholder='토글' style={{ marginTop: 0 }} />
        <div className={cx('toggle-body')} ref={toggleBodyRef}>
          <div className={cx('contents')} ref={toggleContentRef}>
            {contents || <Text />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleList;
