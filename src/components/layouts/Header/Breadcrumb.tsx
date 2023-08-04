import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items, ...rest }: Props) {
  return (
    <nav className={cx('breadcrumb')} aria-label='breadcrumb' {...rest}>
      <ol>
        {items.map((item: BreadcrumbItem) => (
          <li key={item.title} className={cx('breadcrumb-item')}>
            <a {...item}>
              {item.icon && <span>{item.icon}</span>}
              <div>{item.title}</div>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
