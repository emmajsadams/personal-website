This is the repo for my personal website powered by TypeScript Next.js. It is hosted at `import { WEBSITE } from './config/personalDetails.ts` using <https://vercel.com>.

---

# Development

## Setup

- Install Node.js (google this step with your operating system for help)
- `sh ./scripts/latex_install.sh`
- `npm install`

## Documentation

Docz is used for documenting the props and states of React components. The docz server

Also within the \_\_tests\_\_ folder are tests for any sufficiently complicated Component

## Testing

Each component that is complex enough is tested using react-testing-library and Jest. react-testing-library renders components and asserts desired outcomes without relying on implementation details or mocks. This results in robust tests that do not break when components are refactored.

## Next.JS and React

Next.JS was chosen as a framework because it offers server side rendering for all pages while still enabling the use client-side rendering after the initial server side render. In addition most pages are built at build time unless they require server side data to be fetched which enables a fast initial response time of static html and css.

Next.JS uses React components which is a powerful popular framework for building user interfaces. React encourages developers to break up code into components that are functions with one data flow. Components can have state with useState or handle actions after render with useEffect. Due to the popularity of React is has vast library support for common tasks.

## CSS Design

This project uses TailwindCSS, PostCSS, and CSSModules. This keeps CSS scoped to components and provides a flexible highly customizable base of classes.

In addition I used the followinwg research from Smashing Magazine for my link, header, and paragraph styling.

- Header sizes research: <https://www.smashingmagazine.com/2009/08/typographic-design-survey-best-practices-from-the-best-blogs/>
- Link styling research: <https://www.smashingmagazine.com/2010/02/the-definitive-guide-to-styling-web-links/>

## GitLab

Gitlab is used for git hosting and ci build. .gitlab-ci.yml configures which commands to run. On each push to any branch GitLab will run the build command which does the following

- Lints code via eslint
- Lints code via prettier
- Runs all Jest tests

If there are any failures GitLab will notify the project maintainers via email. The build will also be marked as a failure in GitLab.

## Vercel

This website could be easily hosted on any Kubernetes server with a simple Dockerfile. However <https://vercel.com> offers free hosting, fast deploy times, integrated analytics, and git based deployment for Next.JS projects. <https://vercel.com> is run by the same team that maintains Next.JS.

On push to the GitLab main branch Vercel does the following

- Builds docz documentation
- Generates sitemap.xml
- Generates feeds
- Builds the next.js project
- Deploys the project

If there are any failures GitLab and Vercel will notify the project maintainers via email. The build will also be marked as a failure in Vercel and GitLab.

## Accessibility

eslint jsx-ally handles accessibility linting for most common errors. However some errors can only be detected at runtime. I use react-axe for this. This does not hook into the build process so please manually inspect the console before any major changes.

The following react-axe errors can be ignored

- "All page content must be contained by landmarks" can be ignored for CookieConsent and DarkMode components because they are not content that must be contained.
- "Elements must have sufficient color contrast" can be ignored for code blocks because the color contrast is not necessary.

## Key Decisions

- Using git source control: Git is a popular decentralized source control that lets developers work on local offline copies of a code repository. All changes are pushed up to the server when ready. I intentionally broke up my commits into small logical chunks that could be easily reverted and reviewed if necessary. However if I was working on a team I would be sure to work on a separate branch from main named after the feature I am working on. Once that feature was ready I would submit it for code review then squash merge it into the main branch.
- Using eslint and prettier for code formatting: Both these tools have robust automatically fixable style rules that keep code in a consistent readable manner regardless of who writes it, while avoiding the need for developers to internalize styleguides.
- Testing by behavior: Rather than breaking up tests by specific methods, I prefer to test by behaviors instead. Often times unit tests involve several methods such as get and set in order to test a behavior. This makes trying to break up tests by method somewhat confusing. Focusing on all the unique behaviors of a system under test avoids the need to specify which method is being tested.

---

# Content

## Resume

There is a web resume and a PDF resume generated using Latex. They are automatically kept in sync with a single configuration being used to generate both. Git hooks ensure all changes to the PDF resume are checked in before deployment.

This resume is replicated on several different resume websites manually. Resume content was last synced between all sources on 8/2/2021.

- LinkedIn
- StackOverflow
- Indeed
- Hired
- Angel

## Blog

I maintain a blog about software engineering and computer science. All blogs are written in MDX which allows me to pull in React components like Codeblock for a rich experience all while keeping the experience of writing the blog simple by maintaining a single file.

atom2, rss2, and json feeds are generated for blog posts at build time before deploy using code I wrote with help of the feed npm package. Note this means the feeds is not checked into the git repository to avoid cluttering commits with build artifacts.

---

# Analytics

## Google Analytics

Google analytics is integrated into next.js using this blog post as a reference <https://medium.com/frontend-digest/using-nextjs-with-google-analytics-and-typescript-620ba2359dea>. This method correctly tracks client-side page transitions as new pages and handles the hybrid model well. All web vitals are tracked using Next.JS's built in performance measuring tools.

Google Analytics are only configured if the user agrees to cookies because it is not GDPR compliant.

## Cloudflare Analytics

Cloudflare Analytics is enabled by default. Unlike Google Analytics, Cloudflare is GDPR compliant due to the privacy mechanisms built-in. It collects far less data however thus both are used <https://blog.cloudflare.com/free-privacy-first-analytics-for-a-better-web/>.

## Vercel Analytics

Vercel, the hosting service, has built-in Analytics enabled by default. These are also GDPR compliant, but mainly focus on performance. Vercel collects even less data than Cloudflare.

---

# SEO

## Performance

An overlooked aspect of SEO is performance. Google in particular has started punishing websites that score poorly on their web vitals performance metrics. As mentioned above Web Vitals are tracked with all analytics services used and monitored in development before deploying new changes. <https://web.dev/vitals/>

## Server side rendering

Although the Google Search crawler has some support for JavaScript rendering not all search engines do. In addition relying on Google Search's crawler to correctly render heavy single pages apps is less reliable strategy than serving HTML and CSS content primarily. Luckily as discussed above Next.JS compiles most of each page at build time into primarily HTML and CSS ensuring content is crawled reliably.

## robots.txt

A robots.txt file is included allowing all pages to be crawled.

## Sitemaps

The sitemap is generated at build time before deploy using this approach <https://leerob.io/blog/nextjs-sitemap-robots>. Note this means the sitemap is not checked into the git repository to avoid cluttering commits with build artifacts.

## Blog on same domain

Many websites create a separate or subdomain for blogs. However this is not considered a great practice for search engine ranking. Keeping all related content on the same domain means any ranking gained as a trusted and performant result is consolidated.

## Web of trust

At a high level crawlers rely on trusted links linking to unknown links as a way of establishing new trusted links. Think of it a bit like the academic citation process. The more citations a paper has the more likely it is to be a reliable source of research.

Thus on my personal website I link out to all my established social media. On those social media websites I link back to my personal website. This helps to build that web of trust which will boost rankings.

## Blog Sharing

On each blog post is a blog post sharing icon for all major social media platforms that encourage long form technical content. These links to not rely on JavaScript or third-party images thus will not be blocked by commonly used adblocking software. These links use web intent APIs to redirect the user to a automatically filled out share prompt for each service. In addition to web intents all the necessary meta tags are included so that expected titles, images, and content are all filled out for each service.

I referenced this list of web intent APIs during development <https://github.com/bradvin/social-share-urls>
