This is the repo for my personal website powered by TypeScript Next.js. It is hosted at emma.cline.engineer using https://vercel.com.

This resume is replicated on several different resume websites manually.

- https://www.linkedin.com/in/emmajcline/
- https://stackoverflow.com/story/emmajcline (except projects)
- https://my.indeed.com/p/emmac-5gq2y3z (except projects)
- https://hired.com/profile (except projects)
- https://angel.co/u/EmmaJCline (except projects)
- https://amazon.jobs (just PDF resume)
- https://www.vettery.com/profile#/
- UW careers (just profile, no resume)

# Setup

- Install node.js and yarn (google this step with your operating system for help)
- Run this script https://gitlab.com/-/snippets/2044479
- `yarn run install`

# Documentation

Docz is used for documenting the props and states of React components https://emma.cline.engineer/docz/

Also within the **tests** folder are tests for any sufficiently complicated Component

# Choice of Next.JS, TypeScript, and React

TODO

# GitLab

Gitlab is used for git hosting and ci build. .gitlab-ci.yml configures which commands to run. On each push to any branch GitLab will run the build command which does the following

- Lints code via eslint
- Lints code via prettier
- Runs all Jest tests

If there are any failures GitLab will notify the project maintainers via email. The build will also be marked as a failure in GitLab.

# Vercel

This website could be easily hosted on any Kubernetes server with a simple Dockerfile. However https://vercel.com offers free hosting, fast deploy times, integrated analytics, and git based deployment for Next.JS projects. https://vercel.com is run by the same team that maintains Next.JS.

On push to the GitLab main branch Vercel does the following

- Builds docz documentation
- Generates sitemap.xml
- Generates feeds
- Builds the next.js project
- Deploys the project

If there are any failures GitLab and Vercel will notify the project maintainers via email. The build will also be marked as a failure in Vercel and GitLab.

# Design

This project uses tailwindcss, postcss, and cssmodules. This keeps css scoped to components and provides a flexible highly customizable base of classes

I did a bit of research via smashingmagazine on ideal styles for readability.

- Header sizes research: https://www.smashingmagazine.com/2009/08/typographic-design-survey-best-practices-from-the-best-blogs/
- Link styling research: https://www.smashingmagazine.com/2010/02/the-definitive-guide-to-styling-web-links/

This resulted in the following decisions

- Links: always underlined with hover cursor. New tab for external links, same tab for internal links

# SEO

## Google Analytics config

Google analytics is integrated into next.js using this blog post as a reference https://medium.com/frontend-digest/using-nextjs-with-google-analytics-and-typescript-620ba2359dea. This method correctly tracks client-side page transitions as new pages and handles the hybrid model well.

## Sitemaps

The sitemap is generated at build time before deploy using this approach https://leerob.io/blog/nextjs-sitemap-robots. Note this means the sitemap is not checked into the git repository to avoid cluttering commits with build artifacts.

## Feeds

atom2, rss2, and json feeds are generated for blog posts at build time before deploy using code I wrote with help of the feed npm package. Note this means the feeds is not checked into the git repository to avoid cluttering commits with build artifacts.

# Blog

TODO

# Latex Resume

TODO

# Testing

Each component that is complex enough is tested using react-testing-library and Jest. react-testing-library renders components and asserts desired outcomes without relying on implementation details or mocks. This results in robust tests that do not break when components are refactored.
