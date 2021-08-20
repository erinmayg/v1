import React from 'react';

function Works() {
  const underattack = {
    title: 'Under Attack',
    desc: 'A 2D-platformer about the human immune system.',
    techstack: ['Unity', 'C#', 'Photoshop'],
    bottomPos: '65%',
  };

  const petsos = {
    title: 'Petsos',
    desc: 'A mock web application to connect pet sitters and owners.',
    techstack: ['React.js', 'Node.js', 'PostgreSQL'],
    bottomPos: '80%',
  };

  const facultype = {
    title: 'facultype',
    desc: 'A PC app to manage the contacts of faculty members.',
    techstack: ['Java', 'JavaFX'],
    bottomPos: '100%',
  };

  const workData = [underattack, petsos, facultype];

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context('../images/works/', false, /\.(png|jpe?g|svg)$/)
  );

  const work = (key, title, desc, techstack, bottomPos) => {
    return (
      <div className='work-card' key={key}>
        <div>
          <h2>{title}</h2>
          <p className='desc'>{desc}</p>
          <p className='techstack'>{techstack.join(' • ')}</p>
        </div>
        <div className='img-container'>
          <img
            src={images[title.toLowerCase() + '.png'].default}
            style={{ bottom: bottomPos }}
            alt={title}
          />
        </div>
      </div>
    );
  };

  return (
    <section id='works'>
      <h1>My works</h1>
      {workData.map((project, i) => {
        return work(
          i,
          project.title,
          project.desc,
          project.techstack,
          project.bottomPos
        );
      })}
    </section>
  );
}

export default Works;
