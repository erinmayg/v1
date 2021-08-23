import React from 'react';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as Github } from '../svg/github.svg';
import { ReactComponent as LinkedIn } from '../svg/linkedin.svg';
import { ReactComponent as Resume } from '../svg/resume.svg';

function Home() {
  return (
    <section id='home'>
      <div>
        <h1>Hi. I'm Erin.</h1>
        <div className='info'>
          <h2>
            Computer Science student
            <br />
            and aspiring web developer.
          </h2>
          <div className='socmed'>
            <Arrow />
            {/* <ul className='buttons'>
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Resume</li>
            </ul> */}

            <div className='buttons'>
              <a
                href='https://github.com/erinmayg'
                target='_blank'
                rel='noreferrer'
              >
                <Github />
              </a>
              <a
                href='https://linkedin.com/in/erinmayg'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn />
              </a>
              <a
                href='https://drive.google.com/file/d/1psJlKMhGC1Xq9rKdLCG3vRVikCZ4qhFR/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                <Resume />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
