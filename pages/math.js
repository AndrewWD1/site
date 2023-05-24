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
          <h2>Papers</h2>
          <span>(not published)</span>
          <ul className={styles.containerList}>
            <li>
              <a className={styles.whitelink} href="https://ad-site.netlify.app/static/Sheaf_Cohomology_Intro.pdf">
                Basic Sheaf Cohomology
              </a>{" "}
            </li>
          </ul>
          <br />
          <div className={styles.borderLine}></div>
          <h2>Research</h2>
          <ul className={styles.containerList}>
            <li>Summer 2021 Topological Data Analysis reasearch </li>
          </ul>
        </div>
      </main>
    </>
  );
}
