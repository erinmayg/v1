import React from 'react';

function Contact() {
  return (
    <section id='contact'>
      <p>
        I’m always interested in creating{' '}
        <span className='emphasis'>cool stuff</span> and experiencing{' '}
        <span className='emphasis'>new things</span>. <br /> Are you interested
        in working with me?
      </p>

      <div className='btn-wrapper'>
        <a href='mailto:erinmayg@gmail.com'>
          <span className='emphasis'>Let's talk.</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
