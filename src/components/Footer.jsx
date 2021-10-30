import React from 'react';

const Footer = () => {
  return (
    <footer className="b-site-footer" id="contact">
      <p>Social Links:</p>

      <dl className="b-social">
        <div className="b-social__container">
          <dt className="b-social__type">Email:</dt>
          <dd className="b-social__handle">saniyanafees6@gmail.com</dd>
        </div>
        <div className="b-social__container">
          <dt className="b-social__type">LinkedIn:</dt>
          <dd className="b-social__handle">
            <a
              href="https://www.linkedin.com/in/saniya-nafees/"
              target="_blank"
            >
              @saniyanafees6
            </a>
          </dd>
        </div>
        <div className="b-social__container">
          <dt className="b-social__type">Github:</dt>
          <dd className="b-social__handle">
            <a href="https://github.com/saniyanafees6" target="_blank">
              @saniyanafees6
            </a>
          </dd>
        </div>
      </dl>
    </footer>
  );
};

export default Footer;
