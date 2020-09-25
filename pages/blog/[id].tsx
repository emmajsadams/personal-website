import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { fips } from "crypto";

// todo: create app wide head element and page specific head element with different keys
export default function Blog({ metadata, content }) {
  const router = useRouter();

  // TODO: remove this once fallback is turned off
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Container>
        <h1>{metadata.title}</h1>
        <h2>{metadata.date}</h2>
        <ReactMarkdown source={content} />
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postDirectory = path.join(process.cwd(), "public/posts", id);
  const content = fs.readFileSync(
    path.join(postDirectory, "content.md"),
    "utf8"
  );
  const metadata = JSON.parse(
    fs.readFileSync(path.join(postDirectory, "metadata.json"), "utf8")
  );

  return {
    props: {
      metadata,
      content,
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "public/posts");
  const folderNames = fs.readdirSync(postsDirectory);
  const paths = folderNames.map((folderName) => {
    params: {
      id: folderName;
    }
  });

  return {
    // TODO actually use prerendered paths and turn off fallback for max performance
    paths: [],
    fallback: true,
  };
}
