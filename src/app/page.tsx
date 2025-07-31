import React from 'react';
import Image from 'next/image';
import DownloadIcon from '@mui/icons-material/Download';

function Home() {
  return (
    <main id='home'>
      <div className='home__wrapper'>
        <div className='home__content'>
          <div className='home__left'>
            <div className='home__layout'>
              <aside className='profile__container'>
                <div className='profile__image-wrapper'>
                  <Image src='/img/home/profil.jpg' alt='profil' width={250} height={250} />
                </div>
              </aside>
              <div className='intro'>
                <h1>Hello 👋,</h1>
                <h2>My name is <span className='highlight'>BUATHIER Tom</span></h2>
                <h2>I&prime;m an IT student, <span className='highlight'>a fullstack developer</span></h2>
                <a href={process.env.cv_link} target='_blank' rel='noopener noreferrer'>
                  <button className='btn__cv'><DownloadIcon className='icon' /> MY RESUME</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
  