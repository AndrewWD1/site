import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className={styles.container}>Hello</div>
    </main>
  );
}
