"use client";

import React from 'react';
import { Cards } from '@/components';
import { useLanguage } from '@/contexts/LanguageContext';

function Projects() {
  const { t } = useLanguage();

  return (
    <main id="projects">
      <div className="projects__page">
        <div className="projects__top">
          <div className="projects__section">
            <div className="projects__content">
              <h1
                className="projects__title"
                dangerouslySetInnerHTML={{ __html: t('projects.title') }}
              />

              <div className="projects__description">
                <p
                  dangerouslySetInnerHTML={{ __html: t('projects.description') }}
                />
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
