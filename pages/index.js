import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Image
          src="/../public/static/images/berthoud_pass.jpg"
          width={1000}
          height={1000}
          className={styles.imgBackground}
          alt="Picture of the author"
        />
        <div>
          <h1>Welcome</h1>
          <ul>
            <li>{"I'm"} Andrew Doumont.</li>
            <li>
              {"I'm"} a graduate student in the math department at CU-Boulder.
            </li>
            <li>
              My
              <a href="https://github.com/AndrewWD1/CV/blob/main/Doumont_CV.pdf">
                {" "}
                CV
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
