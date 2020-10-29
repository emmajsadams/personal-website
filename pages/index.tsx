import Head from 'next/head'
import Link from 'next/link'

export default function Resume() {
  return (
    <div className="container">
      <Head>
        <title>Emma Cline Résumé</title>
      </Head>
      <h1>Emma Cline</h1>
      <p>
        Full-stack Senior Software Engineer experienced with TypeScript,
        JavaScript, C#, Python.
      </p>
      <p>
        Currently looking for remote Senior Software Engineer positions or
        positions based in Salt Lake City or Draper, Utah.
      </p>
      <div className="md:flex">
        <div className="md:w-1/3">
          <h2>Education</h2>
          <p>University of Washington — B.S, Informatics, 2014</p>
          <p>DigiPen Institute of Technology — Computer Engineering, 2011</p>
          <h2>Languages</h2>
          <p>TypeScript, JavaScript, C#, Python, HTML5/CSS3, Bash, SQL, C</p>
          <h2>Libraries & Frameworks</h2>
          <p>
            Next.JS, React, Vue.js, TailwindCSS, PostCSS, Flask, ASP.NET MVC,
            Nancy (C# Flask)
          </p>
          <h2>Tools</h2>
          <p>
            VSCode, Git, ESLint, Prettier, Docker, Kubernetes, Yarn, npm, cmake,
            gcc
          </p>
          <h2>Databases</h2>
          <p>PostgreSQL, MSSQL, MySQL, Elasticsearch</p>
          <h2>Cloud Providers</h2>
          <p>
            AWS, GCE, Azure, Vercel, DigtalOcean, Cloudflare (workers & CDN),
            Akamai
          </p>
          <h2>Architecture</h2>
          <p>
            Object oriented design, functional programming, REST API design,
            Unit & integration Testing, MVC
          </p>
          <h2>Open Source Portfolio</h2>
          <p>
            <a href="https://gitlab.com/EmmaJCline/discord-mgmt-bot">
              Discord Management Bot
            </a>
            - Discord bots written in TypeScript for a Node.js environment. The
            bots are focused on specific functions that have focused permissions
            and are configured with JSON rather than monolithic web interface
            configured bots that require admin. It is comprised of a set of
            reusable mostly pure functions that are distributed as a library.
          </p>
          <p>
            <a href="https://gitlab.com/EmmaJCline/sharetube">sharetube</a> -
            Sharing a redundantly uploaded video using TypeScript, React, Redux,
            Browserify, ESLint
          </p>
          <p>
            <a href="https://gitlab.com/EmmaJCline/dstruct">dstruct</a> - Data
            structures library for TypeScript
          </p>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://gitlab.com/EmmaJCline">GitLab</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/EmmaJCline">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/EmmaJCline">Twitter</a>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a href="/keys/publickey.asc">Primary Email Public Key</a>
            </li>
          </ul>
        </div>
        <div className="md:w-2/3">
          <h2>Experience</h2>
          <h3>
            Freelance Software Engineer, Remote &mdash; June 2020 - Present
          </h3>
          <ul>
            <li>
              A variety of contract positions focused on full stack web
              development
            </li>
          </ul>
          <h3>
            Lead Senior Software Engineer II,&nbsp;
            <a href="https://www.humblebundle.com">Humble Bundle</a> &mdash;
            Remote &mdash; March 2019 - June 2020
          </h3>
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

          <h3>
            Lead Full Stack Software Engineer,&nbsp;
            <a href="https://www.cfchildren.org">Committee for Children</a>
            &mdash; Seattle &mdash; Jan 2018 - June 2018
          </h3>
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

          <h3>
            Full Stack Software Engineer,&nbsp;
            <a href="https://www.trov.com/">Trov</a> &mdash; Remote &mdash; July
            2013 – Sept 2017
          </h3>
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

          <h3>
            Assistant Researcher,&nbsp;
            <a href="https://ischool.uw.edu">UW Information School</a> &mdash;
            Jan 2013 – Oct 2013
          </h3>
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

          <h3>
            Software Engineer Intern,&nbsp;
            <a href="//www.optionshouse.com/">PEAK6 Investments LP</a> &mdash;
            Sept 2012 – May 2013
          </h3>
          <ul>
            <li>Maintained legacy Java and Ruby on Rails stock trading apps</li>
          </ul>

          <h3>
            Web Instructor and Engineer,&nbsp;
            <a href="//www.washington.edu/lst/workshops/">UW IT</a> &mdash; Feb
            2012 – Mar 2013
          </h3>
          <ul>
            <li>
              Taught modern web development standards to UW staff and students
            </li>
            <li>
              Developed internal applications to manage courses and support
              tickets
            </li>
          </ul>

          <h3>
            Software Engineer Intern,&nbsp;
            <a href="//www.popshops.com/">PopShops.com</a> &mdash; June 2012 –
            Aug 2012
          </h3>
          <ul>
            <li>
              Scraped and normalized product information using Ruby and Java
            </li>
          </ul>

          <h3>
            Software Engineer Intern,&nbsp;
            <a href="//www.smiteworks.com/">SmiteWorks</a> &mdash; June 2011 –
            Aug 2011
          </h3>
          <ul>
            <li>
              Built a C# app to import character data from competitors apps
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
