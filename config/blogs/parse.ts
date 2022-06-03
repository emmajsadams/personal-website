import frontMatter from 'front-matter'

export interface Blog {
	body: string
	matter: {
		name: string
		slug: string
		date: string
		description: string
	}
}

// TODO: just use next-mdx-remote here https://github.com/hashicorp/next-mdx-remote#additional-examples
export function parse(source: string): Blog {
	const matter = frontMatter(source as any)

	return {
		body: matter.body,
		matter: matter.attributes as any,
	}
}
