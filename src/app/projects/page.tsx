import React from 'react';
import { Cards } from '@/components';

function Projects() {
    return (
        <main id="projects">
            <div className='container__page'>
                <div className='container__page--top'>
                    <div className='container__page--top-first'>
                        <div className='container__page--top-projects'>
                            <h1 className='container__page--top-projects-title'> 
                                My <span className='span__title'> Projects </span>
                            </h1>

                            <div className='container__page--top-content'>
                                <p>
                                    Here's my projects section, where you can see my biggest projects from my student years. If you'd like to see more projects, please visit my <a href='https://github.com/BuathierTom' target='_blank'>Github</a>.
                                </p>
                            </div>

                            <div className='container__page--top-cards'>
                                <Cards />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}   


export default Projects