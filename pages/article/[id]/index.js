import Link from "next/link";

export default function article({ article }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">{article.name}</h1>
      <p className="text-sm pt-2">{article.body}</p>
      <br />
      <Link href="/" className="text-red-500 cursor-pointer">
        Go Back
      </Link>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
