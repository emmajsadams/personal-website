import React, { ReactElement } from 'react'
import { Technology as TechnologyConfig } from '../config/technologies'

interface TechnologyProps {
	technology: TechnologyConfig
}

export default function Technology({
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
