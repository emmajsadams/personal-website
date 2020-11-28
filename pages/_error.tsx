import Image from 'next/image'
import React, { ReactElement } from 'react'
import Header from '../components/Header'

export default function Error(): ReactElement {
	return (
		<>
			<Header showBlog={true} showResume={true} showPDFResume={false} />
			<div className="flex justify-center content-center text-center">
				<h2>Oh no! Something has gone wrong!</h2>
			</div>
			<div className="flex justify-center content-center text-center">
				<p>
					The content you are looking for could not be found likely due to an
					invalid url. If you think is a bug&nbsp;
					<a href="mailto:emma@cline.engineer" target="_blank" rel="noreferrer">
						email me
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
