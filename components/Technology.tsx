import React, { ReactElement } from 'react'
import { Technology } from '../config/technologies'

interface TechnologyProps {
	technology: Technology
}

export default function TechnologyElement({
	technology: { category, technologies },
}: TechnologyProps): ReactElement {
	return (
		<>
			<p>
				<span className="font-bold">{category}:</span> {technologies.join(', ')}
			</p>
		</>
	)
}
