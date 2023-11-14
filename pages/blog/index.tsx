import Nav from "../../components/nav";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";

import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const removeFileExtension = (str) => str.replace(/\.(.*)/g, "");

export default function Home({ posts }) {
  return (
    <>
      <Nav />
      <main>
        <div className={styles.listContainer}>
          <h1 className={styles.H1}>Entries</h1>
          <ul className={styles.blogList}>
            {posts.map((post) => {
              return (
                <li key={post.id} className={styles.blogListItem}>
                  <Link
                    className={styles.blogListLink}
                    href={`/blog/${removeFileExtension(post.id)}`}
                  >
                    <h3>{post.title}</h3>
                  </Link>
                  <div className={styles.blogPostDate}>
                    {new Date(post.date).toDateString().slice(4)}
                  </div>
                  <p className={styles.blogPostDescription}>{post.excerpt}</p>
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

const firstFourLines = (file, options) => {
  file.excerpt =
    file.content
      .split("\n")
      .filter((x) => x[0] != "#")
      .join(" ")
      .split("<")
      .map((x) => x.split(">"))
      .map((x) => (x.length > 1 ? x[1] : x[0]))
      .join("")
      .slice(0, 200)
      .split("")
      .filter((x) => x != "\r")
      .join("")
      .trim() + "...";

  return "";
};

export async function getStaticProps() {
  const fileNames1 = fs.readdirSync(postsDirectory);
  const fileNames = fileNames1.filter((x) => x != "index.tsx");

  const allPostsData: {
    excerpt: string | undefined;
    id: string;
    date: Date;
  }[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { excerpt: firstFourLines });

    // Combine the data with the i
    return {
      id,
      date: matterResult.data.date,
      ...matterResult.data,
      excerpt: matterResult.excerpt,
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
