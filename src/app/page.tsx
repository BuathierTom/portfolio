"use client";

import React from 'react';
import Image from 'next/image';
import DownloadIcon from '@mui/icons-material/Download';
import { useLanguage } from '@/contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();

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
                <h1>{t('home.greeting')}</h1>
                <h2 dangerouslySetInnerHTML={{ __html: t('home.nameIntro') }} />
                <h2 dangerouslySetInnerHTML={{ __html: t('home.role') }} />
                <a href={process.env.cv_link} target='_blank' rel='noopener noreferrer'>
                  <button className='btn__cv'><DownloadIcon className='icon' /> {t('home.resumeButton')}</button>
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
  
