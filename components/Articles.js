import ArticlesList from "./ArticlesList";
import cardStyle from "../styles/Layout.module.css";

export default function Articles({ articles }) {
  return (
    <div className={cardStyle.grid}>
      {articles?.map((article, index) => (
        <div key={index}>
          <ArticlesList article={article} />
        </div>
      ))}
    </div>
  );
}
