import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Articles from "../components/Articles";
import { storeData } from "../redux/action";

export default function Home({ articles }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles?.length) {
      dispatch(storeData(articles));
    }
  }, []);

  return (
    <div>
      <Articles articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=10`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
