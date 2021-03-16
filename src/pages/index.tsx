import Head from 'next/head';

import { HEAD_TITLE } from '@constants/seo';
import Home from '@views/Home';

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{HEAD_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
