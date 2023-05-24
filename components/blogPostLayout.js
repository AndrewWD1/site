import Nav from "../components/nav";
import styles from "../styles/Blog.module.css";
import { MDXProvider } from "@mdx-js/react";

const H1 = ({ children }) => {
  return <h1 className={styles.H1}>{children}</h1>;
};
const H2 = ({ children }) => {
  return <h2 className={styles.H2}>{children}</h2>;
};
const H3 = ({ children }) => {
  return <h3 className={styles.H3}>{children}</h3>;
};
const P = ({ children }) => {
  return <p className={styles.P}>{children}</p>;
};

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
};

export default function BlogPostLayout({ children }) {
  return (
    <>
      <Nav />
      <MDXProvider components={components}>
        <div className={styles.blogContainer}>{children}</div>
      </MDXProvider>
    </>
  );
}
