import astarCsharp from './blogs/astar-csharp'
import dstructErrorListMapTree from './blogs/dstruct-error-list-map-tree'
import dstructPoster from './blogs/dstruct-poster'
import dstructSetMultisetStack from './blogs/dstruct-set-multiset-stack'
import dstructTablesQueues from './blogs/dstruct-tables-queues'
import { Blog, parse } from './blogs/parse'

const blogs = [
	astarCsharp,
	dstructErrorListMapTree,
	dstructSetMultisetStack,
	dstructTablesQueues,
	dstructPoster,
]

const parsedBlogs: Blog[] = []
for (const blog of blogs) {
	parsedBlogs.push(parse(blog))
}

// TODO: actually load these blogs dynamically from an mdx file instead of declaring it as a string in TS
export default parsedBlogs
