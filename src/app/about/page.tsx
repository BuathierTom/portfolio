import { SkillsButtonsBack } from '@/components';
import { SkillsButtonsFront } from '@/components/';
import { SkillsButtonsOther } from '@/components/';
import React from 'react';


function About() {
    return (
        <main id='about'>
            <div className='container__page'>
                <div className='container__page--top'>
                    <div className='container__page--top-first'>
                        <div className='container__page--top-about'>
                            <h1> 
                                About <span className='span__title'> Me </span>
                            </h1>

                            <div className='container__page--top-content'>
                            <p>
                                <p>
                                    I&prime;m a computer science student at the University of Calais, and I&prime;m about to start my master&prime;s degree in Free Software Engineering (I2L). I&prime;m passionate about web development, and I&prime;ve built many personal projects outside of my coursework, alongside my academic projects.
                                </p>
                            <br />
                                <p>
                                    In the Projects section of my portfolio, you&prime;ll find a selection of my most important and interesting work. This includes major projects I&prime;ve completed during my three years of study at the University of Calais, as well as several personal projects I&prime;ve developed on my own initiative.
                                    These projects cover a wide range of topics, from fullstack web applications and API development to more experimental or passion-driven ideas. Each project reflects both my technical skills and my curiosity to explore new technologies outside the classroom.
                                    Feel free to explore this section to get a better idea of my experience and my approach to problem-solving.
                                </p>
                            <br />
                                <p>
                                    After completing my master&prime;s degree, my goal is to work as a fullstack web developer.
                                </p>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className='container__page--top-second'>
                        <div className='container__page--top-skills'>
                            <h1>
                                My <span className='span__title'> Skills </span>
                            </h1>
                        </div>
                        <div className='container__page--top-frontend'>
                            <h2>
                                <span className='span__title'> Front-End </span> tools
                            </h2>
                            <SkillsButtonsFront />
                        </div>
                        <div className='container__page--top-backend'>
                            <h2>
                                <span className='span__title'> Back-End </span> tools
                            </h2>
                            <SkillsButtonsBack />
                        </div>
                        <div className='container__page--top-other'>
                            <h2>
                                <span className='span__title'> Other </span> tools
                            </h2>
                            <SkillsButtonsOther />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}   


export default About