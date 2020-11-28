/// <reference types="next" />
/// <reference types="next/types/global" />

// TODO: move this to separate file and fix typing
// types/mdx.d.ts
declare module '*.mdx' {
	let MDXComponent: (props: any) => JSX.Element
	export default MDXComponent
	export const frontMatter = {
		title: string,
		description: string,
		date: string,
		shortUrl: string,
		__resourcePath: string,
	}
}
