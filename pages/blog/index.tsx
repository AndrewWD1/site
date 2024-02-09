import Nav from "../../components/nav";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";

import React, { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { useRouter } from "next/navigation";
import PageChangeContainer from "../../components/pageChangeContainer";

const removeFileExtension = (str: string) => str.replace(/\.(.*)/g, "");

export default function Home({ posts }: { posts: any[] }) {
  const numberOfPages = posts.length / 4;
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <>
      <Nav />
      <main>
        <div className={styles.listContainer}>
          <h1 className={styles.H1}>Entries</h1>
          <ul className={styles.blogList}>
            {posts.slice(pageNumber, pageNumber + 4).map((post) => {
              return (
                <li key={post.id} className={styles.blogListItem}>
                  <Link
                    className={styles.blogListLink}
                    href={`/blog/${removeFileExtension(post.id)}`}
                  >
                    <h3>{post.title}</h3>
                  </Link>
                  <div className={styles.blogPostDate}>
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <p className={styles.blogPostDescription}>{post.excerpt}</p>
                </li>
              );
            })}
          </ul>
          <PageChangeContainer
            numberOfPages={numberOfPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
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
      .filter((x: string[]) => x[0] != "#")
      .join(" ")
      .split("<")
      .map((x: string) => x.split(">"))
      .map((x: string[]) => (x.length > 1 ? x[1] : x[0]))
      .join("")
      .slice(0, 200)
      .split("")
      .filter((x: string) => x != "\r")
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
