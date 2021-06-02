import { GetStaticProps } from 'next';
import { FiCalendar, FiUser } from 'react-icons/fi';
import Link from 'next/link';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="logo" />
      </header>

      <section>
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
        <div className={styles.info}>
          <span>
            <FiCalendar />
            15 Junho
          </span>
          <span>
            <FiUser />
            Milena Almeida
          </span>
        </div>
      </section>

      <section>
        <h1>Criando um app CRA do zero</h1>
        <p>
          Tudo sobre como criar a sua primeira aplicação utilizando Create React
          App
        </p>
        <div className={styles.info}>
          <span>
            <FiCalendar />
            20 Junho
          </span>
          <span>
            <FiUser />
            Milena Almeida
          </span>
        </div>
      </section>

      <section>
        <h1>Como utilizar Hooks</h1>
        <p>Pensando em sincronização em vez de ciclos de vida.</p>
        <div className={styles.info}>
          <span>
            <FiCalendar />
            15 Junho
          </span>
          <span>
            <FiUser />
            Milena Almeida
          </span>
        </div>
      </section>

      <section>
        <h1>Criando um app CRA do zero</h1>
        <p>
          Tudo sobre como criar a sua primeira aplicação utilizando Create React
          App
        </p>
        <div className={styles.info}>
          <span>
            <FiCalendar />
            20 Junho
          </span>
          <span>
            <FiUser />
            Milena Almeida
          </span>
        </div>
      </section>

      <Link href="/">
        <a className={styles.link}>Carregar mais posts</a>
      </Link>
    </main>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
