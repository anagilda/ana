import { TRenderProps } from '@typings/commonPropTypes';

import Content from './Content';

const LayoutGrid = ({ children }: TRenderProps) => (
  <div className="flex flex-col w-full h-full min-h-screen">{children}</div>
);

const Layout = ({ children }: TRenderProps) => (
  <LayoutGrid>{children}</LayoutGrid>
);

Layout.Content = Content;

export default Layout;
