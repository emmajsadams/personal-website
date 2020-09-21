import fs from "fs";
import path from "path";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Head from "next/head";

// todo: create app wide head element and page specific head element with different keys
export default function Blogs({ posts }) {
  return (
    <>
      <Head>
        <title>Emma Stebbins' Blog</title>
      </Head>
      <Container>
        <Col>
          <Row>
            <ul>
              {posts.map((post) => {
                const title = post.metadata.title;
                const folderPath = path.join("blog", post.folderName);

                return (
                  <li key={title}>
                    <Link href={folderPath}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </Row>
        </Col>
      </Container>
    </>
  );
}

// todo rename variables in this file
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "public/posts");
  const folderNames = fs.readdirSync(postsDirectory);

  const posts = folderNames.map((folderName) => {
    const folderPath = path.join(postsDirectory, folderName);
    const content = fs.readFileSync(
      path.join(folderPath, "content.md"),
      "utf8"
    );
    const metadata = JSON.parse(
      fs.readFileSync(path.join(folderPath, "metadata.json"), "utf8")
    );

    return { content, metadata, folderName };
  });

  return {
    props: {
      posts,
    },
  };
}
