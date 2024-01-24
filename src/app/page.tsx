import React from 'react';
import Image from 'next/image';

import DownloadIcon from '@mui/icons-material/Download';

 
function Home() {
  return (
    <main id='home'>
      <div className="container__page">
        <div className='container__page-top'>
          <div className='container__page-top--left'>
            <div className='container__page-top--container'>
              <aside className='container__left-part'>
                <div>
                  <Image src="/profil.jpg" alt='profil' width="250" height="250"/>
                </div>
              </aside>
              <div className='container__right-part'>
                <h1>Hello,</h1>
                <h2>My name is <span className='span__title'>BUATHIER Tom</span></h2>
                <h2>I'm an IT student, <span className='span__title'>a fullstack developer</span></h2>

                <a href={"https://drive.google.com/file/d/1qeIApRfaFcICu7WuQk527zqhf7Ngyhfj/view?usp=sharing"} target='_blank'>
                  <button className='button__downloadCV'><DownloadIcon className='dwl__icon'/> MY RESUME </button>
                </a>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home