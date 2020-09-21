import Head from "next/head";
import Container from "react-bootstrap/Container";

// todo: refactor this page to use reactbootstrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "../styles/Home.module.css";

// todo: create app wide head element and page specific head element with different keys
// todo: change name to resume or something besides home'
// todo: change links to a list
export default function Home() {
  return (
    <Container fluid="md">
      <Head>
        <title>Emma Stebbins</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="google-site-verification"
          content="O_dhy7q1Kfwrvh4v9kyyHmHVZWJqzCegjrgNteyU65k"
        />
        <link href="/images/emma.jpg" rel="icon" type="image/jpg"></link>
      </Head>
      <h1>Emma Stebbins</h1>
      <p>
        Full-stack software engineer experienced with C#, Python, JavaScript.
        Seattle, WA or Remote.
      </p>
      <main className={styles.grid}>
        <section>
          <h3>Education</h3>
          <p>University of Washington — B.S, Informatics, 2014</p>
          <p>DigiPen Institute of Technology — Computer Engineering, 2011</p>
          <h3>Languages</h3>
          <p>JavaScript, CSS, HTML, C#, Python, SQL</p>
          <h3>Architecture</h3>
          <p>
            Object oriented design, functional programming, REST API design,
            Unit & integration Testing, MVC & MVVM
          </p>
          <h3>Open Source Portfolio</h3>
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
          <h3>Links</h3>
          <a href="Emma_Stebbins_Resume.pdf">PDF Resume</a>,
          <a href="mailto:emma@stebbins.dev">Email</a>,
          <a href="/blog">Blog</a>,
          <a href="https://github.com/EmmaJStebbins">GitHub</a>,
          <a href="https://www.linkedin.com/in/EmmaJStebbins">LinkedIn</a>,
          <a href="https://twitter.com/EmmaJStebbins">Twitter</a>,
        </section>

        <section>
          <h3 className="section-header">Experience</h3>

          <h4 className="section-subheader">
            Senior Software Engineer II,
            <a href="//www.humblebundle.com">Humble Bundle</a> &mdash; Remote
            &mdash; March 2019 - Present
          </h4>
          <h4 className="section-subheader">
            Senior Software Engineer,
            <a href="//www.humblebundle.com">Humble Bundle</a> &mdash; Remote
            &mdash; July 2018 - March 2019
          </h4>
          <ul>
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

          <h4 className="section-subheader">
            Lead Full Stack Software Engineer,
            <a href="//www.cfchildren.org">Committee for Children</a> &mdash;
            Seattle &mdash; Jan 2018 - June 2018
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

          <h4 className="section-subheader">
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

          <h4 className="section-subheader">
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

          <h4 className="section-subheader">
            Software Engineer Intern,
            <a href="//www.optionshouse.com/">PEAK6 Investments LP</a> &mdash;
            Sept 2012 – May 2013
          </h4>
          <ul>
            <li>Maintained legacy Java and Ruby on Rails stock trading apps</li>
          </ul>

          <h4 className="section-subheader">
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

          <h4 className="section-subheader">
            Software Engineer Intern,
            <a href="//www.popshops.com/">PopShops.com</a> &mdash; June 2012 –
            Aug 2012
          </h4>
          <ul>
            <li>
              Scraped and normalized product information using Ruby and Java{" "}
            </li>
          </ul>

          <h4 className="section-subheader">
            Software Engineer Intern,
            <a href="//www.smiteworks.com/">SmiteWorks</a> &mdash; June 2011 –
            Aug 2011
          </h4>
          <ul>
            <li>
              Built a C# app to import character data from competitors apps
            </li>
          </ul>
        </section>
      </main>
    </Container>
  );
}
