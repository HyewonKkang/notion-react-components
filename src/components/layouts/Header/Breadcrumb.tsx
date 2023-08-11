import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import Emoji from 'src/components/common/Emoji';
import styles from './Header.module.css';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLElement> {
  items: PageInfo[];
}

function Breadcrumb({ items, className, ...rest }: Props) {
  return (
    <nav className={cx('breadcrumb', className)} aria-label='breadcrumb' {...rest}>
      <ol>
        {items.map((item: PageInfo) => (
          <li key={item.title} className={cx('breadcrumb-item')}>
            <a title={item.title} href={item.href}>
              {item.icon && <Emoji icon='🖤' width={20} hoverable={false} />}
              <div>{item.title}</div>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
