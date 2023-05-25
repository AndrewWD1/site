import Nav from "../../components/nav";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const removeFileExtension = (str) => str.replace(/\.(.*)/g, "");

export default function Home({ posts }) {
  return (
    <>
      <Nav />
      <main>
        <div>
          <h1>Entries</h1>
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link
                    className={styles.blogListLink}
                    href={`/blog/${removeFileExtension(post.id)}`}
                  >
                    <h3>{post.title}</h3>
                  </Link>
                  <div>{new Date(post.date).toLocaleDateString()}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

const postsDirectory = path.join(process.cwd(), "pages/blog");

export async function getStaticProps() {
  const fileNames1 = fs.readdirSync(postsDirectory);
  const fileNames = fileNames1.filter((x) => x != "index.js");

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the i
    return {
      id,
      ...matterResult.data,
    };
  });

  //Sort posts by date
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  //Fix date serialization for json
  let posts = JSON.parse(JSON.stringify(sortedPosts));

  return {
    props: {
      posts,
    },
  };
}
