"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';

import jsonData from './data';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectDetails = (typeof jsonData)[number];

const DESKTOP_VIEWPORT_WIDTH = 1920;
const DESKTOP_VIEWPORT_HEIGHT = 1080;

type PreviewFrameProps = {
  url: string;
  title: string;
};

const PreviewFrame = ({ url, title }: PreviewFrameProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!wrapperRef.current || !iframeRef.current) {
        return;
      }

      const wrapperWidth = wrapperRef.current.offsetWidth;
      const scale = wrapperWidth / DESKTOP_VIEWPORT_WIDTH;
      iframeRef.current.style.transform = `translateX(-50%) scale(${scale})`;
    };

    updateScale();

    const handleResize = () => updateScale();
    window.addEventListener('resize', handleResize);

    let observer: ResizeObserver | null = null;

    if (typeof ResizeObserver !== 'undefined' && wrapperRef.current) {
      observer = new ResizeObserver(() => updateScale());
      observer.observe(wrapperRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="card__preview-frame-wrapper" ref={wrapperRef}>
      <iframe
        ref={iframeRef}
        className="card__preview-frame"
        src={url}
        title={title}
        width={DESKTOP_VIEWPORT_WIDTH}
        height={DESKTOP_VIEWPORT_HEIGHT}
        loading="lazy"
        allow="accelerometer; ambient-light-sensor; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        allowFullScreen
      />
    </div>
  );
};

const CardsComponent = () => {
  const [activeProject, setActiveProject] = useState<ProjectDetails | null>(null);
  const { t } = useLanguage();

  const handleOpenModal = (project: ProjectDetails) => setActiveProject(project);
  const handleCloseModal = () => setActiveProject(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <>
      <div className="cards__grid">
        {jsonData.map((cardData, index) => (
          <div className="card" key={index}>
            <span className="card__image">
              {cardData.previewUrl ? (
                <PreviewFrame
                  url={cardData.previewUrl}
                  title={`${t(cardData.titleKey)} live preview`}
                />
              ) : (
                <Image
                  src={cardData.img}
                  alt={`${t(cardData.titleKey)} preview`}
                  width={300}
                  height={200}
                />
              )}
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

              {cardData.link_github && (
                <span className="card__links">
                  <a
                    href={cardData.link_github}
                    target="_blank"
                    className="card__link"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
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
          onClick={handleCloseModal}
        >
          <div
            className="card__modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="card__modal-close"
              type="button"
              aria-label={t('cards.closeDialog')}
              onClick={handleCloseModal}
            >
              <CloseIcon fontSize="inherit" />
            </button>

            <div className="card__modal-header">
              <span className="card__modal-date">{t(activeProject.dateKey)}</span>
              <h2>{t(activeProject.titleKey)}</h2>
            </div>

            <div className="card__modal-body">
              <p className="card__modal-description">{t(activeProject.descriptionKey)}</p>

              {activeProject.additionalInfoKey && (
                <p className="card__modal-additional">{t(activeProject.additionalInfoKey)}</p>
              )}

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

              {activeProject.detailsKeys && (
                <div className="card__modal-section">
                  <h3>{t('cards.highlights')}</h3>
                  <ul>
                    {activeProject.detailsKeys.map((detailKey, index) => (
                      <li key={index}>{t(detailKey)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {(activeProject.link_site || activeProject.link_github) && (
              <div className="card__modal-footer">
                {activeProject.link_site && (
                  <a
                    className="card__modal-action"
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
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CardsComponent;
