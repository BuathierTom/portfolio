import React from 'react';
import { SkillsButtonsFront, SkillsButtonsBack, SkillsButtonsOther } from '@/components';

function About() {
  return (
    <main id="about">
      <div className="about__wrapper">
        <div className="about__section">
          <div className="about__intro">
            <div className="about__intro-text">
              <h1>
                About <span className="highlight">Me</span>
              </h1>
              <div className="about__description">
                <p>
                  I&apos;m a computer science student at the University of Calais, and I&apos;m about to start my master&apos;s degree in Free Software Engineering (I2L). I&apos;m passionate about web development, and I&apos;ve built many personal projects outside of my coursework, alongside my academic projects.
                  <br /><br />
                  In the Projects section of my portfolio, you&apos;ll find a selection of my most important and interesting work. This includes major projects I&apos;ve completed during my three years of study at the University of Calais, as well as several personal projects I&apos;ve developed on my own initiative.
                  These projects cover a wide range of topics, from fullstack web applications and API development to more experimental or passion-driven ideas. Each project reflects both my technical skills and my curiosity to explore new technologies outside the classroom.
                  Feel free to explore this section to get a better idea of my experience and my approach to problem-solving.
                  <br /><br />
                  After completing my master&apos;s degree, my goal is to work as a fullstack web developer.
                </p>
              </div>
            </div>
          </div>

          <div className="about__skills">
            <div className="about__skills-title">
              <h1>My <span className="highlight">Skills</span></h1>
            </div>

            <div className="about__skills-group">
              <h2><span className="highlight">Front-End</span> tools</h2>
              <SkillsButtonsFront />
            </div>

            <div className="about__skills-group">
              <h2><span className="highlight">Back-End</span> tools</h2>
              <SkillsButtonsBack />
            </div>

            <div className="about__skills-group">
              <h2><span className="highlight">Other</span> tools</h2>
              <SkillsButtonsOther />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
