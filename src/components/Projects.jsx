import React from 'react';

const Projects = () => {
  return (
    <>
      <main role="main" className="l-main b-page">
        <h1 className="b-page__title">Projects</h1>
        <div className="c-page__content">
          <article className="b-work">
            <header className="b-work__header">
              <h2 className="b-work__title">GetFlix</h2>

              <ul className="b-tags-list">
                <li className="b-tag">Front End</li>

                <li className="b-tag">REACT</li>

                <li className="b-tag">Stripe API</li>

                <li className="b-tag">TMDB API</li>
              </ul>
            </header>

            <div className="c-work__content">
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
                  Visit GetFlix &rarr;
                </a>
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
};

export default Projects;
