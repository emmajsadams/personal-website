// TODO: Document these as urls and variables below
// Indeed - <https://my.indeed.com/p/emmac-5gq2y3z> (updated 8/2/2021)
// Hired - <https://hired.com/profile> (updated 8/2/2021)
// Angel - <https://angel.co/u/emmajsadams> (updated 8/2/2021)
// StackOverFlow - ????

// TODO: Consider pulling these values from package.json and converting this to JS?
// TODO: Find some way to pull into no js environment? maybe package.json since json is universial?
// Configured
export const FIRST_NAME = 'Emma'
export const LAST_NAME = 'Adams'
export const USERNAME = 'emmajsadams'
export const PHONE_NUMBER = '+1-669-666-4508'
export const ROOT_URL = `engineer`
export const TITLE = 'Senior Software Engineer'
export const DESCRIPTION =
	'Senior Software Engineer 👩‍💻. Happily Trans (she/her) ♀️🏳️‍⚧️'

// Generated
export const NAME = `${FIRST_NAME} ${LAST_NAME}`
export const PDF_RESUME_NAME = `${FIRST_NAME}${LAST_NAME}_Resume`
export const LINKEDIN = `linkedin.com/in/${USERNAME}`
export const GITHUB = `github.com/${USERNAME}`
export const TWITTER = `twitter.com/${USERNAME}`
export const EMAIL = `${FIRST_NAME.toLowerCase()}@${LAST_NAME.toLowerCase()}.${ROOT_URL}`
export const URL = `${FIRST_NAME.toLowerCase()}.${LAST_NAME.toLowerCase()}.${ROOT_URL}`
