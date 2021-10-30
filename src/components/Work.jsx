import React from 'react';
const Work = () => {
  return (
    <>
      <main role="main" className="l-main b-page">
        <h1 className="b-page__title">Work Experience</h1>
        <div className="b-page__content">
          <article className="b-work">
            <header className="b-work__header">
              <h2 className="b-work__title">
                Front End Developer
                <span className="company__name">
                  <span> @ </span>
                  <a href="https://www.clarksusa.com/" target="_blank">
                    Clarks
                  </a>
                </span>
              </h2>

              <ul className="b-tags-list">
                <li className="b-tag">Front End</li>

                <li className="b-tag">JavaScript</li>

                <li className="b-tag">JQuery</li>

                <li className="b-tag">HTML</li>

                <li className="b-tag">CSS</li>

                <li className="b-tag">Salesforce</li>
              </ul>
            </header>

            <div className="b-work__content">
              <ul>
                <li>
                  Managed and updated front end of Clarks USA eCommerce website
                </li>
                <li>
                  Created new features functionality and capabilities on the
                  site using jQuery, HTML and CSS
                </li>
                <li>
                  Supported Email Marketing coding requirements on Salesforce
                  Marketing Cloud platform
                </li>
                <li>
                  Ran A/B tests and analyze consumer behavior using Monetate
                  platform.
                </li>
              </ul>
            </div>

            <footer className="b-work__footer">
              <p>
                <a
                  href="https://www.clarksusa.com/"
                  class="link-teal"
                  target="_blank"
                >
                  Visit Clarks &rarr;
                </a>
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
};

export default Work;
