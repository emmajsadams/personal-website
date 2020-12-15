/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface FrontMatter {
	name: string
	description: string
	date: string
	__resourcePath: string
}

declare interface MDXComponent {
	(props: any): JSX.Element
}

// TODO: move this to separate file and fix typing
// types/mdx.d.ts
declare module '*.mdx' {
	export default MDXComponent
	export const frontMatter: FrontMatter
}
