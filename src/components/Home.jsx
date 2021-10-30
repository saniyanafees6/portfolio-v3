import React from 'react';

const Home = () => {
  return (
    <main role="main" className="l-main b-page">
      <section className="b-intro">
        <h1 className="b-intro__greeting">Hi there, I'm Saniya!</h1>

        <p>
          I'm a software developer based in Colorado specializing in building
          user friendly applications and websites. Shortly after graduating{' '}
          <a href="https://www.njit.edu/">New Jersey Institute of Technology</a>{' '}
          I joined <a href="https://www.clarksusa.com">Clarks</a>, where I
          worked as a Front End Developer and got the opportunity to work on
          interesting and meaningful projects on a daily basis.
        </p>

        <h2 id="i-m-also">
          Here&rsquo;s some of the technologies I enjoy working with:
        </h2>

        <ul className="skills">
          <li>JavaScript</li>
          <li>React</li>
          <li>jQuery</li>
          <li>HTML &amp; CSS/Sass</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Firebase</li>
          <li>Git</li>
          <li>Markdown</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
