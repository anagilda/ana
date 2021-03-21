import { TRenderProps } from '@typings/commonPropTypes';

const Content = ({ children }: TRenderProps): JSX.Element => {
  return (
    <main className="container max-w-5xl px-10 mx-auto md:px-20">
      {children}
    </main>
  );
};

export default Content;
