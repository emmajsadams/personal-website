/// <reference types="next" />
/// <reference types="next/types/global" />

// types/mdx.d.ts
declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
  export const frontMatter = {
    title: string,
    date: string,
    __resourcePath: string,
  }
}
