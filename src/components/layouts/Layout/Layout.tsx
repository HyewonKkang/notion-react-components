import React, { HTMLAttributes, cloneElement, useState, ReactElement, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './Layout.module.css';
import TitleBar from '../TitleBar';
import Aside from '../Sider';
import Header from '../Header';

const cx = classnames.bind(styles);

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  hasSider?: boolean;
}

function Content({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('content', className)} {...rest} />;
}

interface PageInfo {
  title?: string;
  emoji?: string;
  cover?: string;
}

interface BodyProps extends HTMLAttributes<HTMLDivElement> {
  pageInfo?: PageInfo;
}

function Body({ className, pageInfo, children, ...rest }: BodyProps) {
  return (
    <div className={cx('layout-body', className)} {...rest}>
      <TitleBar
        emoji='❤️'
        cover='https://www.notion.so/images/page-cover/nasa_tim_peake_spacewalk.jpg'
      >
        제목입니다
      </TitleBar>
      {children}
    </div>
  );
}

function Layout({ hasSider = true, children, ...props }: LayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const openSider = () => setIsCollapsed(true);

  const closeSider = () => setIsCollapsed(false);

  const asideComponent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === Aside,
  ) as ReactElement;

  const headerComponent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === Header,
  ) as ReactElement;

  const bodyComponent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === Body,
  );

  useEffect(() => {
    setIsCollapsed(
      asideComponent.props.defaultCollapsed || asideComponent.props.collapsed || false,
    );
  }, []);

  return (
    <div className={cx('layout')} {...props}>
      {hasSider &&
        cloneElement(asideComponent, {
          ...asideComponent.props,
          closeSider,
          collapsed: isCollapsed,
        })}
      <div className={cx('layout-body-container')}>
        {cloneElement(headerComponent, {
          ...headerComponent.props,
          hasSider,
          isCollapsed,
          openSider,
        })}
        {bodyComponent}
      </div>
    </div>
  );
}

export default Layout;

export { Content, Body };
