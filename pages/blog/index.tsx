import Head from "next/head";
import fs from "fs";
import path from "path";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// todo: create app wide head element and page specific head element with different keys
export default function Blogs({ posts }) {
  return (
    <Container>
      <Col>
        {posts.map((post) => {
          const title = post.metadata.title;

          return <Row key={title}>{title}</Row>;
        })}
      </Col>
    </Container>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "components/blog/posts");
  const folderNames = fs.readdirSync(postsDirectory);

  const posts = folderNames.map((filename) => {
    const folderPath = path.join(postsDirectory, filename);
    const content = fs.readFileSync(
      path.join(folderPath, "content.md"),
      "utf8"
    );
    const metadata = JSON.parse(
      fs.readFileSync(path.join(folderPath, "metadata.json"), "utf8")
    );

    return { content, metadata };
  });

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
