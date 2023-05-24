import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <nav className={styles.nav}>
        <Link className={styles.title} href="/">
          Andrew Doumont
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/math">math</Link>
          </li>
          <li>
            <Link href="/teaching">teaching</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>Hello</div>
    </main>
  );
}
