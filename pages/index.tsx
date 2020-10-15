import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/Home.module.css"; // TODO: page level css vs component css

export default function Resume() {
  return (
    <Container fluid="md">
      <Head>
        <title>Emma Stebbins</title>
        <meta
          name="google-site-verification"
          content="O_dhy7q1Kfwrvh4v9kyyHmHVZWJqzCegjrgNteyU65k"
        />
        <link href="/emma.jpg" rel="icon" type="image/jpg"></link>
      </Head>
      <h1 className={styles.header}>Emma Stebbins</h1>
      <p>
        Full-stack software engineer experienced with C#, Python, JavaScript.
        Seattle, WA or Remote.
      </p>
      <Row>
        <Col md={3}>
          <h3 className={styles.header}>Education</h3>
          <p>University of Washington — B.S, Informatics, 2014</p>
          <p>DigiPen Institute of Technology — Computer Engineering, 2011</p>
          <h3 className={styles.header}>Languages</h3>
          <p>JavaScript, CSS, HTML, C#, Python, SQL</p>
          <h3 className={styles.header}>Architecture</h3>
          <p>
            Object oriented design, functional programming, REST API design,
            Unit & integration Testing, MVC & MVVM
          </p>
          <h3 className={styles.header}>Open Source Portfolio</h3>
          <p>
            <a href="https://github.com/emmastebbins/blocktube">sharetube</a> -
            Sharing a redundantly uploaded video using TypeScript, React, Redux,
            Browserify, ESLint
          </p>
          <p>
            <a href="https://github.com/emmastebbins/dstruct">dstruct</a> - Data
            structures library for TypeScript
          </p>
          <p>
            <a href="https://github.com/emmastebbins/CheckOut">CheckOut</a> -
            Store inventory manager using C# and WebAPI
          </p>
          <h3 className={styles.header}>Links</h3>
          <ul>
            <li>
              <a href="/Emma_Stebbins_Resume.pdf">PDF Resume</a>
            </li>
            <li>
              <a href="mailto:emma@stebbins.dev">Email</a>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a href="https://github.com/EmmaJStebbins">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/EmmaJStebbins">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/EmmaJStebbins">Twitter</a>
            </li>
          </ul>
        </Col>
        <Col md={9}>
          <h3 className={styles.header}>Experience</h3>

          <h4>
            Freelance Software Engineer, Remote &mdash; June 2020 - Present
          </h4>
          <ul>
            <li>
              A variety of contract positions focused on full stack web
              development
            </li>
          </ul>
          <h4>
            Lead Senior Software Engineer II,
            <a href="https://www.humblebundle.com">Humble Bundle</a> &mdash;
            Remote &mdash; March 2019 - June 2020
          </h4>
          <ul>
            <li>
              Promoted from Senior Software Engineer to Lead Senior Software
              Engineer II over the course of my employment. Lead the platform
              team focused on site reliability engineering.
            </li>
            <li>
              Leading the internationalization project for an 8-year-old
              application with minimal prior internationalization efforts
            </li>
            <li>
              Worked with product to define a plan to optimize the user funnel
              for our monthly product
            </li>
            <li>
              Integrated an OAuth login system for Facebook and Google into our
              existing user system
            </li>
            <li>
              Planned a project to migrate all sessions to the newly required
              email or TOTP two-factor system
            </li>
            <li>
              Helped define standards for representing DateTimes, Money, and
              Percents in Python and JavaScript
            </li>
          </ul>

          <h4>
            Lead Full Stack Software Engineer,
            <a href="https://www.cfchildren.org">Committee for Children</a>
            &mdash; Seattle &mdash; Jan 2018 - June 2018
          </h4>
          <ul>
            <li>
              Lead replacement of a legacy monolithic DNN platform over to using
              React and .NET Core
            </li>
            <li>
              Migrated user authentication to an OpenID identity
              provider(IdentityServer4)
            </li>
            <li>
              Incrementally rewrote a series of untested stored procedures into
              a modern C# WebAPI.
            </li>
          </ul>

          <h4>
            Full Stack Software Engineer,
            <a href="https://www.trov.com/">Trov</a> &mdash; Remote &mdash; July
            2013 – Sept 2017
          </h4>
          <ul>
            <li>
              Remote software development team where developers write unit and
              integration tests
            </li>
            <li>
              Constructed an on demand insurance platform for consumer items
              with C# & SQL
            </li>
            <li>
              Developed an app for managing claims and insuring items with React
              and Angular.js
            </li>
            <li>
              Built a business intelligence system for sending information to
              partners while respecting legal PII concerns using Python
            </li>
          </ul>

          <h4>
            Assistant Researcher,
            <a href="https://ischool.uw.edu">UW Information School</a> &mdash;
            Jan 2013 – Oct 2013
          </h4>
          <ul>
            <li>
              Lead developer for a JavaScript library which abstracted cloud
              drive APIs like Dropbox and Google Drive
            </li>
            <li>
              Taught various UW masters students to use and contribute to the
              library
            </li>
          </ul>

          <h4>
            Software Engineer Intern,
            <a href="//www.optionshouse.com/">PEAK6 Investments LP</a> &mdash;
            Sept 2012 – May 2013
          </h4>
          <ul>
            <li>Maintained legacy Java and Ruby on Rails stock trading apps</li>
          </ul>

          <h4>
            Web Instructor and Engineer,
            <a href="//www.washington.edu/lst/workshops/">UW IT</a> &mdash; Feb
            2012 – Mar 2013
          </h4>
          <ul>
            <li>
              Taught modern web development standards to UW staff and students
            </li>
            <li>
              Developed internal applications to manage courses and support
              tickets
            </li>
          </ul>

          <h4>
            Software Engineer Intern,
            <a href="//www.popshops.com/">PopShops.com</a> &mdash; June 2012 –
            Aug 2012
          </h4>
          <ul>
            <li>
              Scraped and normalized product information using Ruby and Java
            </li>
          </ul>

          <h4>
            Software Engineer Intern,
            <a href="//www.smiteworks.com/">SmiteWorks</a> &mdash; June 2011 –
            Aug 2011
          </h4>
          <ul>
            <li>
              Built a C# app to import character data from competitors apps
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
