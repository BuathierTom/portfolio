"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { skillCategories } from "./data";

const SkillsShowcase = () => {
  const { t } = useLanguage();

  return (
    <section className="skills-showcase">
      {skillCategories.map((category) => {
        const slug = category.key.split('.').pop()?.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
        return (
        <article className={`skills-card skills-card--${slug}`} key={category.key}>
          <h3>{t(category.key)}</h3>
          <div className="skills-card__items">
            {category.items.map(({ labelKey, Icon }) => (
              <div className="skills-card__item" key={labelKey}>
                <span className="skills-card__icon" aria-hidden>
                  <Icon />
                </span>
                <span className="skills-card__label">{t(labelKey)}</span>
              </div>
            ))}
          </div>
        </article>
      )})}
    </section>
  );
};

export default SkillsShowcase;
