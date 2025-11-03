"use client";

import React from 'react';
import { SkillsButtonsFront, SkillsButtonsBack, SkillsButtonsOther } from '@/components';
import { useLanguage } from '@/contexts/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <main id="about">
      <div className="about__wrapper">
        <div className="about__section">
          <div className="about__intro">
            <div className="about__intro-text">
              <h1
                dangerouslySetInnerHTML={{ __html: t('about.title') }}
              />
              <div className="about__description">
                <p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
              </div>
            </div>
          </div>

          <div className="about__skills">
            <div className="about__skills-title">
              <h1 dangerouslySetInnerHTML={{ __html: t('about.skillsTitle') }} />
            </div>

            <div className="about__skills-group">
              <h2 dangerouslySetInnerHTML={{ __html: t('about.frontTitle') }} />
              <SkillsButtonsFront />
            </div>

            <div className="about__skills-group">
              <h2 dangerouslySetInnerHTML={{ __html: t('about.backTitle') }} />
              <SkillsButtonsBack />
            </div>

            <div className="about__skills-group">
              <h2 dangerouslySetInnerHTML={{ __html: t('about.otherTitle') }} />
              <SkillsButtonsOther />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
