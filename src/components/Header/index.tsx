import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <img src="/logo.svg" alt="logo" className={styles.header} />
      </Link>
    </header>
  );
}
