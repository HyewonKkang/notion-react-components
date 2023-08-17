import InternalLayout, { Content, Body } from './Layout';
import Sider from '../Sider';
import Header from '../Header';

export type { LayoutProps } from './Layout';
export type { Props as SiderProps } from '../Sider';

type InternalLayoutType = typeof InternalLayout;

type CompoundedComponent = InternalLayoutType & {
  Header: typeof Header;
  Body: typeof Body;
  Sider: typeof Sider;
  Content: typeof Content;
};

const Layout = InternalLayout as CompoundedComponent;

Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Body = Body;

export default Layout;
