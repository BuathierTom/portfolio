import React from 'react';
import Header from '@/layouts/Header';
import '@/styles/index.scss';
import { NavBar } from '@/components';
 
function Home() {
  return (
    <main>
      <Header />
      <NavBar />

      <div className="container__page">
        <div className='container__page-top'>
          <div className='container__page-top--left'>
            <div className='container__page-top--container'>
              <aside className='container__left-part'>
                <div>IMAGE</div>
              </aside>
              <div className='container__right-part'>
                <h1>Hello,</h1>
                <h2>My name is BUATHIER Tom</h2>
                <h2>I'm a backend developper</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home