"use client";

import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';
import { useLanguage } from '@/contexts/LanguageContext';

const MySwal = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

function Contact() {
  const [state, handleSubmit] = useForm("xayrwkrn");
  const [popupShown, setPopupShown] = React.useState(false);
  const { t } = useLanguage();

  if (state.succeeded && !popupShown) {
    MySwal.fire({
      icon: 'success',
      title: t('contact.success'),
    });
    setPopupShown(true);

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <main id="contact">
      <div className="contact__wrapper">
        <div className="contact__title">
          <h1 dangerouslySetInnerHTML={{ __html: t('contact.title') }} />
        </div>

        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="form__field">
                <label>{t('contact.nameLabel')}</label>
                <input type="text" name="name" placeholder={t('contact.namePlaceholder')} required />
              </div>
              <div className="form__field">
                <label>{t('contact.emailLabel')}</label>
                <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
              </div>
            </div>

            <div className="form__message">
              <label>{t('contact.messageLabel')}</label>
              <textarea name="message" placeholder={t('contact.messagePlaceholder')} required />
            </div>

            <div className="form__submit">
              <button type="submit">
                <div className="btn__content">
                  {t('contact.submit')}
                  <SendIcon className="btn__icon" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
