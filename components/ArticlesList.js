import listStyles from "../styles/Layout.module.css";
import Link from "next/link";

export default function ArticlesList({ article }) {
  return (
    <Link href={"/article/[id]"} as={`/article/${article.id}`} legacyBehavior>
      <div className={listStyles.main}>
        <div className={listStyles.card}>
          <h4>{article.name}</h4>
          <p>{article.email}</p>
          <p>{article.body}</p>
        </div>
      </div>
    </Link>
  );
}
