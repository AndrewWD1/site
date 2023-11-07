import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.title} href="/">
        Andrew Doumont
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
