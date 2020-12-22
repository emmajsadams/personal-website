import Image from 'next/image'
import React, { ReactElement } from 'react'
import Header from '../components/Header'

export default function Error(): ReactElement {
	return (
		<>
			<Header />
			<div className="flex justify-center content-center text-center">
				<h2>Oh no! Something has gone wrong!</h2>
			</div>
			<div className="flex justify-center content-center text-center">
				<p>
					The robots working behind the scenes cannot find the content you
					requested. If you think this is an error email me at&nbsp;
					<a href="mailto:emma@cline.engineer" target="_blank" rel="noreferrer">
						emma@cline.engineer
					</a>
					.
				</p>
			</div>
			<div className="flex justify-center content-center text-center">
				<p>
					Navigate to a valid page with the header or relax with this picture of
					cherry blossoms.
				</p>
			</div>
			<div className="flex justify-center content-center text-center">
				<Image
					src="/files/cherry-blossoms.png"
					alt="Relaxing cherry blossoms"
					width={675}
					height={514}
				/>
			</div>
		</>
	)
}
