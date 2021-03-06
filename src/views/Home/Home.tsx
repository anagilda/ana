import Title from '@components/Title';
import Layout from '@layout';

import CardsGrid from './CardsGrid';
import styles from './Home.module.css';

function Home(): JSX.Element {
  return (
    <Layout>
      <Layout.Content>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <p className={styles.description}>Start building your Next project!</p>

        <button
          className={
            'mt-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          }
          onClick={() => {
            window.alert('With typescript and Jest');
          }}
        >
          Test Button
        </button>

        <CardsGrid />
      </Layout.Content>

      <Layout.Footer />
    </Layout>
  );
}

export default Home;
