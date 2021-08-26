import React, { useState, useEffect } from 'react';
import { ReactComponent as Eye } from '../svg/eye.svg';

function About() {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context('../images/', false, /\.(png|jpe?g|svg)$/)
  );

  const totalImages = Object.values(images).length;

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const updateIdx = setInterval(() => {
      setIdx((idx + 1) % totalImages);
    }, 3000);
    return () => clearInterval(updateIdx);
  });

  return (
    <section id='about'>
      <h1>About me</h1>
      <p>
        I am a Y3 Computer Science student at NUS. I am interested in learning
        new things and I love to create stuff. I have years of experience
        working in Graphic Design and my hobby is to create digital art.
      </p>

      <div className='skills'>
        <div className='skills-content'>
          <h2>Skills</h2>
          <ul>
            <li>Frontend Dev</li>
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>Digital Art</li>
          </ul>
        </div>
      </div>

      <div className='artwork'>
        <Eye />
        <a
          href='https://instagram.com/slyth.erinnn'
          target='_blank'
          rel='noreferrer'
        >
          See my paintings
        </a>
        <div className='slideshow'>
          <img src={images['img' + (idx + 1) + '.jpg'].default} alt='' />
        </div>
      </div>
    </section>
  );
}

export default About;
