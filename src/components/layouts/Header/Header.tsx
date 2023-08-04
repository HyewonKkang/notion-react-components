import React, { HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames/bind';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import styles from './Header.module.css';
import Breadcrumb from './Breadcrumb';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLHeadElement> {
  breadcrumbs: BreadcrumbItem[];
  rightAddon?: ReactElement;
}

function Header({ breadcrumbs, rightAddon, ...rest }: Props) {
  return (
    <div className={cx('header')} {...rest}>
      <div className={cx('topbar')}>
        <div aria-label='aside-open-button' role='button'>
          <MenuIcon />
        </div>
        <div>
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div>{rightAddon && rightAddon}</div>
      </div>
    </div>
  );
}

export default Header;
