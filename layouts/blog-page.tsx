import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'

const components = {
  code: CodeBlock,
}

export default function BlogPage({ children, frontMatter }) {
  const router = useRouter()

  // TODO: remove this once fallback is turned off
  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <MDXProvider components={components}>
      <Head>
        <title>Emma Cline - {frontMatter.title}</title>
      </Head>
      <div className="container">
        <h1>{frontMatter.title}</h1>
        <h2>{frontMatter.date}</h2>
        <hr />
        {children}
        <hr />
        <Link href="/blog">Back to Blog Index</Link>
        <br />
        <Link href="/">Back to Resume</Link>
      </div>
    </MDXProvider>
  )
}
