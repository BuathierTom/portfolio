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
                                    Etiam lobortis augue vitae risus aliquet porta. Vestibulum gravida augue ut purus laoreet dignissim. Proin pulvinar diam justo, in tempus enim egestas quis. 
                                    Nam in nulla tellus. Maecenas ullamcorper semper sem pharetra consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                                    Fusce at auctor massa, ac tempor eros.
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