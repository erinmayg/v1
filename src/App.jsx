import React, { useRef, useEffect } from 'react';
import useWindowSize from './hooks/useWindowSize';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import './App.scss';
import { ReactComponent as Git } from './svg/socmed/github.svg';
import { ReactComponent as Insta } from './svg/socmed/ig.svg';
import { ReactComponent as Link } from './svg/socmed/linkedin.svg';

function App() {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  // useEffect(() => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`;
  // }, [size.height]);

  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());
  // });

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className='App'>
      <header>
        <Nav />
      </header>
      <div className='socmed-deco' aria-orientation='vertical'>
        <a href='https://github.com/erinmayg' target='_blank' rel='noreferrer'>
          <Git />
        </a>
        <a
          href='https://instagram.com/erinmayg'
          target='_blank'
          rel='noreferrer'
        >
          <Insta />
        </a>
        <a
          href='https://linkedin.com/in/erinmayg'
          target='_blank'
          rel='noreferrer'
        >
          <Link />
        </a>
      </div>
      <div className='contactInfo' aria-orientation='vertical'>
        <a href='mailto:erinmayg@gmail.com' target='_blank' rel='noreferrer'>
          erinmayg@gmail.com
        </a>
      </div>
      <div ref={scrollContainer} className='scroll'>
        <Home />
        <About />
        <Works />
        <Contact />
      </div>
      <footer>
        <a
          href='https://github.com/erinmayg/erinmayg.github.io'
          target='_blank'
          rel='noreferrer'
        >
          Designed and Built by Erin May
        </a>
      </footer>
    </div>
  );
}

export default App;
