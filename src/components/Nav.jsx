import React, { useState, useEffect, useRef } from 'react';

function Nav() {
  const [hide, setHide] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHide(window.scrollY !== 0 && window.scrollY > prevScroll.current);
      prevScroll.current = window.scrollY;
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <nav ref={prevScroll} className={`nav ${hide && 'nav--hide'}`}>
      <ul>
        <li>
          <a href='/v1/#about'>About</a>
        </li>
        <li>
          <a href='/v1/#works'>Works</a>
        </li>
        <li>
          <a href='/v1/#contact'>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
