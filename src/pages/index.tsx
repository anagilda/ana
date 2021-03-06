import Head from 'next/head';

import { HEAD_TITLE } from '@constants/seo';

function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>{HEAD_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-h-screen text-6xl bg-purple-200">
        Hi, I&apos;m Ana!
      </div>
    </>
  );
}

export default HomePage;
