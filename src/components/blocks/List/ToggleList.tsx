import { Children, HTMLAttributes, cloneElement, isValidElement } from 'react';
import classnames from 'classnames/bind';
import styles from './List.module.css';
import Text from '../Text';
import { ReactComponent as ToggleIcon } from '../../../assets/icons/toggle.svg';
import useToggle from '../../../hooks/useToggle';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  header?: string;
  open?: boolean;
}

function ToggleList({ header, open, children, className, ...rest }: Props) {
  const { filled, isCollapsed, handleButtonClick, toggleBodyRef, toggleContentRef } = useToggle(
    header,
    open,
  );

  return (
    <div className={cx('list-block', 'toggle-header', className)} {...rest}>
      <div className={cx('toggle-icon-wrapper')}>
        <button
          className={cx('toggle-icon', 'button-reset', { filled, opened: isCollapsed })}
          aria-label='열기'
          onClick={handleButtonClick}
        >
          <ToggleIcon />
        </button>
      </div>
      <div className={cx('toggle-body-wrapper')}>
        <Text placeholder='토글' className={cx('toggle-header-text')}>
          {header}
        </Text>
        <div
          className={cx('toggle-body', { 'fit-content-height': isCollapsed })}
          ref={toggleBodyRef}
        >
          <div className={cx('contents')} ref={toggleContentRef}>
            {children ? (
              Children.map(children, (child) => {
                if (isValidElement(child) && child.type === Text) {
                  return cloneElement(child, {
                    ...child.props,
                    className: cx('toggle-body-text'),
                  });
                }
                return child;
              })
            ) : (
              <Text className={cx('toggle-body-text')} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToggleList;
