This is the repo for my personal website powered by typescript next.js. It is hosted at emma.stebbins.dev using vercel

# TODO

- Fully implement react-ga https://github.com/react-ga/react-ga
- change to exact versions
- setup api and component tests (precommit and github hook)
- setup precommit hoook and github hook for running tests
- link to voice passing project
- add style for links to make it clear they are clickable
- remove github environment for github pages
- use ems instead of pixels in css
- update most recnet job description to include leads
- setup keybase for new identity, link to those keys in a standardized way on website (old keys in 1pass)
- switch to google domains instead of namecheap
- Resetup google analytics on new emma domain
- remove link shortening url, create basic link shortneing service in next.js
- deal with dependabot https://github.com/EmmaJStebbins/emma.stebbins.dev/network/alerts
- generate robots.txt
- implmement resume.json https://resumake.io/ https://themes.jsonresume.org/theme/kendall https://github.com/jsonresume/resume-schema
- implement amp https://nextjs.org/docs/advanced-features/amp-support/introduction
- update pdf resume and other job hunting sites using resume.json
- figure out how to have an app wide head tags

// todo: refactor this page to use reactbootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

<Container>
  <Row>
    <Col sm={8}>sm=8</Col>
    <Col sm={4}>sm=4</Col>
  </Row>
</Container>

## General review eview of nextjs and vercel

- manages all domains and sets up easy redirects
- free for personal
- setups a separate function for each api
- handles production builds with sensible defaults
- environment variables with .env files
- provides an environment for each branch pushed, history of deployements, with the abil.it to do a prod build when pushing to main https://vercel.com/emmajs/emma-stebbins-dev/deployments
