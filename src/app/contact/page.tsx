"use client";

import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';

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

  if (state.succeeded && !popupShown) {
    MySwal.fire({
      icon: 'success',
      title: 'Message sent successfully',
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
          <h1>
            Contact <span className="highlight">Me</span>
          </h1>
        </div>

        <div className="contact__form">
          <form onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="form__field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className="form__field">
                <label>Email</label>
                <input type="email" name="email" placeholder="example@gmail.com" required />
              </div>
            </div>

            <div className="form__message">
              <label>Message</label>
              <textarea name="message" placeholder="Hello Tom," required />
            </div>

            <div className="form__submit">
              <button type="submit">
                <div className="btn__content">
                  Send
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
