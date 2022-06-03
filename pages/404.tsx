import Image from 'next/image'
import { ReactElement } from 'react'
import Header from '../components/Header'
import { EMAIL } from '../config/personalDetails'
import utilStyles from '../styles/utils.module.css'

export default function Page(): ReactElement {
	return (
		<>
			<Header />
			<div className={utilStyles.center}>
				<h2>Oh no! Something has gone wrong!</h2>
			</div>
			<div className={utilStyles.center}>
				<p>
					The robots working behind the scenes cannot find the content you
					requested. If you think this is an error email me at&nbsp;
					<a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
						{EMAIL}
					</a>
					.
				</p>
			</div>
			<div className={utilStyles.center}>
				<p>
					Navigate to a valid page with the header or relax with this picture of
					cherry blossoms.
				</p>
			</div>
			<div className={utilStyles.center}>
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
