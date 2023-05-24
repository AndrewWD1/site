import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import bp from "../public/static/images/berthoudpass.jpg";

export default function Home() {
  return (
    <>
      <Nav />
      <Image
        src={bp}
        width={1000}
        height={1000}
        className={styles.imgBackground}
        alt="Picture of the author"
      />
      <main>
        <div className={styles.container}>
          <h2>Teaching</h2>
          <ul className={styles.containerList}>
            <li>{"I'm"} currently instructing Calc.</li>
            <li>
              I have previously instructed Calc II and {"TA'"}d for both Calc I
              and Calc II
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
