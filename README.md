This is the repo for my personal website powered by typescript next.js. It is hosted at emma.stebbins.dev using vercel

# TODO

- use mdx https://mdxjs.com/ https://blog.tailwindcss.com/building-the-tailwind-blog for blog format
- Use tailwindcss and emotionjs to manage colors and reponsive design
  - https://tailwindcss.com/
  - https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss-emotion
  - double check I dont need to do this step https://emotion.shyar/docs/ssr#nextjs
  - https://benmcmahen.com/why-i-choose-emotion/
  - https://nextjs.org/docs/basic-features/built-in-css-support
- use ems instead of pixels in css
- setup linters
- Fully implement react-ga https://github.com/react-ga/react-ga
- setup google analytics web vitals tracking
- setup tests
- setup precommit hoook and github hook for running tests
- link to voice passing project
- remove github environment for github pages
- update most recnet job description to include leads
- setup keybase for new identity, link to those keys in a standardized way on website (old keys in 1pass)
- remove link shortening url, create basic link shortneing service in next.js
- generate robots.txt
- implmement resume.json https://resumake.io/ https://themes.jsonresume.org/theme/kendall https://github.com/jsonresume/resume-schema (theme https://themes.jsonresume.org/theme/onepage)
- implement amp https://nextjs.org/docs/advanced-features/amp-support/introduction
- investigate this stack https://twitter.com/ryanflorence/status/1217875244674797569

# Overview

CSS is using postcss and css modules, with a BEM naming convention. Currently a custom PostCSS config is not possible due to this open issue with next.js but once solved I can customize the postcss compiler like with any other project https://github.com/vercel/next.js/issues/17242

- http://getbem.com/
- https://jahed.dev/2018/02/09/using-css-modules-with-bem/

Inspirations for overall stack choice: https://twitter.com/ryanflorence/status/1217875244674797569
