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