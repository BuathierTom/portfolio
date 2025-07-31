import React from 'react';
import { Cards } from '@/components';

function Projects() {
  return (
    <main id="projects">
      <div className="projects__page">
        <div className="projects__top">
          <div className="projects__section">
            <div className="projects__content">
              <h1 className="projects__title">
                My <span className="projects__title-highlight">Projects</span>
              </h1>

              <div className="projects__description">
                <p>
                  Here&prime;s my projects section, where you can see my biggest projects from my student years.
                  If you&prime;d like to see more projects, please visit my{' '}
                  <a href="https://github.com/BuathierTom" target="_blank" rel="noopener noreferrer">Github</a>.
                </p>
              </div>

              <div className="projects__cards">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
