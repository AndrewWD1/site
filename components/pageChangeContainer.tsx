import styles from "../styles/Blog.module.css";

export default function PageChangeContainer({
  numberOfPages,
  pageNumber,
  setPageNumber,
}: {
  numberOfPages: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className={styles.pageChangeContainer}>
      {pageNumber > 0 ? (
        <button
          onClick={() => {
            setPageNumber(pageNumber - 4);
          }}
          className={styles.pageChangeButton}
        >
          &#8592; Last page
        </button>
      ) : (
        <div></div>
      )}
      {pageNumber <= numberOfPages && (
        <button
          onClick={() => {
            setPageNumber(pageNumber + 4);
          }}
          className={styles.pageChangeButton}
        >
          Next page &#8594;
        </button>
      )}
    </div>
  );
}
