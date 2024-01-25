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
                                    Hello ! 👋
                                </p>
                            <br />
                                <p>
                                    I'm a 3rd year computer science student at the University Institute of Technology of Calais. I'm a fullstack developer and it's through this portfolio that I'm showing you my front-end development skills. 
                                </p>
                            <br />
                                <p>
                                    As for my other projects, you can visit the associated part of my portfolio, which gathers all the biggest projects I've done during my 3 years of study.
                                </p>
                            <br />
                                <p>
                                    My goal after my Technological Bachelor, I'd like to go for a master's degree in computer science. My goal after my studies is to work as a fullstack web developer.
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