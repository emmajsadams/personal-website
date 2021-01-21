import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import React, { ReactElement } from 'react'
import '../utils/setupPrism'

interface CodeBlockProps {
	children: string
	className: string
}

export default function CodeBlock({
	children,
	className,
}: CodeBlockProps): ReactElement {
	const language = className.replace(/language-/, '') as Language

	return (
		<Highlight {...defaultProps} code={children.trim()} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={{ ...style, padding: '20px' }}>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}
