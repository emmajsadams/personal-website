import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

// todo: create app wide head element and page specific head element with different keys
export default function Blog({ post }) {
  const router = useRouter();

  // remove this once fallback is turned off
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ReactMarkdown source={post.content} />;
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const post = { content: id };

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
}

// TODO: actually specify all blog post ids instead of relying on the fallbakc behavior, then turn off fallback behavior to instantly 404
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
