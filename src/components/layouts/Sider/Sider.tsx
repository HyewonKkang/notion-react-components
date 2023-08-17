import { HTMLAttributes, ReactNode, useState } from 'react';
import classnames from 'classnames/bind';
import Emoji from 'src/components/common/Emoji';
import styles from './Sider.module.css';
import { ReactComponent as CloseAsideIcon } from '../../../assets/icons/menu-close.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

const cx = classnames.bind(styles);

export interface Props extends HTMLAttributes<HTMLDivElement> {
  notionTitle: string;
  groups: PageGroupInfo[];
  addon?: ReactNode;
  footer?: ReactNode;
  closeSider?: () => void;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  trigger?: ReactNode;
}

function Aside({
  notionTitle,
  collapsed,
  groups,
  className,
  addon,
  footer,
  closeSider,
  defaultCollapsed,
  ...rest
}: Props) {
  return (
    <aside className={cx('aside-container', { collapsed }, className)} {...rest}>
      <div className={cx('aside')}>
        <div className={cx('aside-header')}>
          <div className={cx('notion-title')}>
            <span className={cx('user-icon')}>👩‍💻</span>
            <span className={cx('title')}>{notionTitle}</span>
          </div>
          <button className={cx('close-button')} onClick={closeSider}>
            <CloseAsideIcon />
          </button>
        </div>
        <div className={cx('aside-body')}>
          {groups.map((group: PageGroupInfo) => (
            <div className={cx('page-group')} key={group.tag}>
              <div className={cx('page-group-title')}>
                <span>{group.tag}</span>
                <button className={cx('plus-button')}>
                  <PlusIcon />
                </button>
              </div>
              <ul className={cx('page-list')}>
                {group.pages.map((page) => (
                  <li key={page.title}>
                    <a className={cx('page-anchor')} href={page.href}>
                      <div className={cx('page-anchor-inner')}>
                        <Emoji icon={page.icon} className={cx('page-icon')} width={20} />
                        <span className={cx('page-title')}>페이지 1</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {addon && <div className={cx('page-group')}>{addon}</div>}
          {footer && <div className={cx('aside-footer')}>{footer}</div>}
        </div>
      </div>
    </aside>
  );
}

export default Aside;
