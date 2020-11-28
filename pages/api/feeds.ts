import generateFeeds from '../../scripts/generateFeeds'

export default async function handler(req, res): Promise<void> {
	if (process.env.NODE_ENV === 'production') {
		res
			.status(403)
			.json({ messsage: 'Feed generation not available in production' })
		return
	}

	await generateFeeds()
	res.status(200).json({ messsage: 'Feeds generated' })
	return
}
