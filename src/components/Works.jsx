import React from 'react';
import { ReactComponent as Cta } from '../svg/cta.svg';

function Works() {
  const underattack = {
    title: 'Under Attack',
    desc: 'A 2D-platformer about the human immune system.',
    techstack: ['Unity', 'C#', 'Photoshop'],
    link: 'https://erinmayg.github.io/under-attack-website',
  };

  const petsos = {
    title: 'Petsos',
    desc: 'A mock web application to connect pet sitters and owners.',
    techstack: ['React.js', 'Node.js', 'PostgreSQL'],
    link: 'https://cs2102-petsos.herokuapp.com',
  };

  const facultype = {
    title: 'facultype',
    desc: 'A PC app to manage the contacts of faculty members.',
    techstack: ['Java', 'JavaFX'],
    link: 'https://github.com/erinmayg/tp',
  };

  const workData = [underattack, petsos, facultype];

  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context('../images/works/', false, /\.(png|jpe?g|svg)$/)
  );

  const work = (key, project) => {
    return (
      <div className='work-card' key={key}>
        <div className='work-text'>
          <h2>{project.title}</h2>
          <p className='desc'>{project.desc}</p>
          <p className='techstack'>{project.techstack.join(' • ')}</p>
        </div>
        <a
          className='cta-wrapper'
          href={project.link}
          target='_blank'
          rel='noreferrer'
        >
          <Cta />
          <div className='img-container'>
            <img
              src={images[project.title.toLowerCase() + '.png']}
              alt={project.title}
            />
          </div>
        </a>
      </div>
    );
  };

  return (
    <section id='works'>
      <h1>My works</h1>
      {workData.map((project, i) => {
        return work(i, project);
      })}
    </section>
  );
}

export default Works;
