"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
                <Link href='/projects' className='btn__projects'>
                  {t('home.projectsButton')}
                  <ArrowForwardIcon className='btn__icon' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
  
