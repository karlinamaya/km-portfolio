import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section id="about">
      <h1>Hi, I'm Karlina</h1>
      <p>I'm a <TypeAnimation
        sequence={[
          'developer 💻',
          1100,
          'designer 🎨',
          1100,
          'researcher 🔎',
          1100,
        ]}
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
      /></p>
    </section>
  );
};

export default About;