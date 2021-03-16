import { TRenderProps } from '@typings/commonPropTypes';

const Content = ({ children }: TRenderProps): JSX.Element => {
  return <main>{children}</main>;
};

export default Content;
