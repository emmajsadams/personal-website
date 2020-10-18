import Link from "next/link";
import Head from "next/head";

// TODO: figure out why there is a missing module error and if I can import glob these
import { frontMatter as astarData } from "./astar-csharp.mdx";
import { frontMatter as dstructErrorData } from "./dstruct-error-list-map-tree.mdx";
import { frontMatter as dstructPosterData } from "./dstruct-poster.mdx";
import { frontMatter as dstructSetData } from "./dstruct-set-multiset-stack.mdx";
import { frontMatter as dstructTablesData } from "./dstruct-tables-queues.mdx";
const BLOG_POSTS = [
  astarData,
  dstructErrorData,
  dstructPosterData,
  dstructSetData,
  dstructTablesData,
];

// TODO: read mdx files in the blog folder rather than manually creating links
export default function Blogs() {
  return (
    <>
      <Head>
        <title>Emma Stebbins' Blog</title>
      </Head>
      <div className="container">
        <h1>Blog Posts</h1>
        <hr />
        <ul>
          {BLOG_POSTS.map((post) => (
            <li key={post.title}>
              <Link href={post.__resourcePath.replace(".mdx", "")}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <Link href="/">Back to Resume</Link>
      </div>
    </>
  );
}
