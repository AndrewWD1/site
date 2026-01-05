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
          <h1>Welcome</h1>
          <ul className={styles.containerList}>
            <li>
              {"I'm"} a graduate student in the math department at CU-Boulder.
            </li>
            <li>
              I study geometry (primarily symplectic manifolds and singular spaces) and my advisor is Professor Markus
              Pflaum.
            </li>
            <li>
              You can find my{" "}
              <a
                href="https://github.com/AndrewWD1/CV/blob/main/Doumont_CV.pdf"
                className={styles.whitelink}
              >
                CV here.
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
