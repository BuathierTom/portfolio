"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import { SiModrinth } from 'react-icons/si';

import jsonData from './data';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectDetails = (typeof jsonData)[number];

const DESKTOP_VIEWPORT_WIDTH = 1920;
const DESKTOP_VIEWPORT_HEIGHT = 1080;
const PREVIEW_ROOT_MARGIN = '200px';

type PreviewFrameProps = {
  url: string;
  title: string;
};

const PreviewFrame = ({ url, title }: PreviewFrameProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: PREVIEW_ROOT_MARGIN }
    );

    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const iframe = iframeRef.current;

    if (!wrapper || !iframe) {
      return;
    }

    const updateScale = () => {
      const scale = wrapper.offsetWidth / DESKTOP_VIEWPORT_WIDTH;
      iframe.style.transform = `translateX(-50%) scale(${scale})`;
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div className="card__preview-frame-wrapper" ref={wrapperRef}>
      {isVisible && (
        <iframe
          ref={iframeRef}
          className={isLoaded ? 'card__preview-frame card__preview-frame--loaded' : 'card__preview-frame'}
          src={url}
          title={title}
          width={DESKTOP_VIEWPORT_WIDTH}
          height={DESKTOP_VIEWPORT_HEIGHT}
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

const CardsComponent = () => {
  const [activeProject, setActiveProject] = useState<ProjectDetails | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const { t } = useLanguage();

  const handleOpenModal = (project: ProjectDetails) => setActiveProject(project);
  const handleCloseModal = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <div className="cards__grid">
        {jsonData.map((cardData, index) => (
          <div className="card" key={index}>
            <span className="card__image">
              <PreviewFrame
                url={cardData.previewUrl}
                title={`${t(cardData.titleKey)} live preview`}
              />
              {cardData.link_site && (
                <a
                  className="card__image-overlay"
                  href={cardData.link_site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('cards.overlay')} - ${t(cardData.titleKey)}`}
                >
                  <span>{t('cards.overlay')}</span>
                  <LaunchIcon />
                </a>
              )}
            </span>

            <div className="card__title">
              <h3>{t(cardData.titleKey)}</h3>
            </div>

            <div className="card__techs">
              {cardData.stack?.map(({ Icon, label }, idx) => (
                <div className="card__tech" key={idx} title={label}>
                  <Icon />
                </div>
              ))}
            </div>

            <div className="card__body">
              <div className="card__description">
                <p>{t(cardData.descriptionKey)}</p>
              </div>
            </div>

            <div className="card__footer">
              <div className="card__footer-left">
                <button className="card__date">{t(cardData.dateKey)}</button>
                <button
                  className="card__details-button"
                  type="button"
                  onClick={() => handleOpenModal(cardData)}
                >
                  {t('cards.details')}
                </button>
              </div>

              {(cardData.link_github || cardData.link_modrinth) && (
                <span className="card__links">
                  {cardData.link_github && (
                    <a
                      href={cardData.link_github}
                      target="_blank"
                      className="card__link"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {cardData.link_modrinth && (
                    <a
                      href={cardData.link_modrinth}
                      target="_blank"
                      className="card__link"
                      rel="noopener noreferrer"
                    >
                      <SiModrinth />
                    </a>
                  )}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="card__modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="card-modal-title"
          onClick={handleCloseModal}
        >
          <div
            className="card__modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              className="card__modal-close"
              type="button"
              aria-label={t('cards.closeDialog')}
              onClick={handleCloseModal}
            >
              <CloseIcon fontSize="inherit" />
            </button>

            <div className="card__modal-content">
              <div className="card__modal-header">
                <div className="card__modal-heading">
                  {activeProject.logo && (
                    <Image
                      className="card__modal-logo"
                      src={activeProject.logo}
                      alt={`${t(activeProject.titleKey)} logo`}
                      width={72}
                      height={72}
                    />
                  )}
                  <div className="card__modal-heading-text">
                    <span className="card__modal-date">{t(activeProject.dateKey)}</span>
                    <h2 id="card-modal-title">{t(activeProject.titleKey)}</h2>
                  </div>
                </div>
                <p className="card__modal-description">{t(activeProject.descriptionKey)}</p>
              </div>

              <div className="card__modal-grid">
                <div className="card__modal-main">
                  {activeProject.additionalInfoKey && (
                    <p className="card__modal-additional">{t(activeProject.additionalInfoKey)}</p>
                  )}

                  {activeProject.detailsKeys && (
                    <div className="card__modal-section">
                      <h3>{t('cards.highlights')}</h3>
                      <ul className="card__modal-highlights">
                        {activeProject.detailsKeys.map((detailKey, index) => (
                          <li key={index}>{t(detailKey)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <aside className="card__modal-aside">
                  {activeProject.stack && (
                    <div className="card__modal-section">
                      <h3>{t('cards.techStack')}</h3>
                      <div className="card__modal-stack">
                        {activeProject.stack.map(({ Icon, label }, index) => (
                          <div className="card__modal-stack-item" key={index}>
                            <span className="card__modal-stack-icon" title={label}>
                              <Icon />
                            </span>
                            <span className="card__modal-stack-label">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(activeProject.link_site || activeProject.link_github || activeProject.link_modrinth) && (
                    <div className="card__modal-section">
                      <h3>{t('cards.links')}</h3>
                      <div className="card__modal-links">
                        {activeProject.link_site && (
                          <a
                            className="card__modal-action card__modal-action--primary"
                            href={activeProject.link_site}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LaunchIcon className="card__modal-action-icon" />
                            <span>{t('cards.viewLive')}</span>
                          </a>
                        )}
                        {activeProject.link_github && (
                          <a
                            className="card__modal-action"
                            href={activeProject.link_github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GitHubIcon className="card__modal-action-icon" />
                            <span>{t('cards.viewSource')}</span>
                          </a>
                        )}
                        {activeProject.link_modrinth && (
                          <a
                            className="card__modal-action"
                            href={activeProject.link_modrinth}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SiModrinth className="card__modal-action-icon" />
                            <span>{t('cards.viewModrinth')}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardsComponent;
