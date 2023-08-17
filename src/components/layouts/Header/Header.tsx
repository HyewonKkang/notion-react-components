import { HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import styles from './Header.module.css';
import Breadcrumb from './Breadcrumb';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLHeadElement> {
  breadcrumbs: PageInfo[];
  rightAddon?: ReactElement;
  hasSider?: boolean;
  isCollapsed?: boolean;
  openSider?: () => void;
}

function Header({
  breadcrumbs,
  isCollapsed,
  hasSider,
  className,
  rightAddon,
  openSider,
  ...rest
}: Props) {
  return (
    <header className={cx('header', className)} {...rest}>
      <div className={cx('topbar')}>
        {hasSider && !isCollapsed && (
          <button
            aria-label='menu-button'
            type='button'
            onClick={openSider}
            className={cx('menu-hover')}
          >
            <MenuIcon />
          </button>
        )}
        <div className={cx('breadcrumbs')}>
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div>{rightAddon && rightAddon}</div>
      </div>
    </header>
  );
}

export default Header;
