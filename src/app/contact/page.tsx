"use client";

import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';

const MySwal = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },  
    

})

function Contact() {

    const [state, handleSubmit] = useForm("xayrwkrn");
    const [popupShown, setPopupShown] = React.useState(false);

    if (state.succeeded && !popupShown) {
        MySwal.fire({
            icon: 'success',
            title: 'Message sent successfully',
            showConfirmButton: false,
        });
        setPopupShown(true);

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    return (
        <main id="contact">
            <div className='container__page'>
                <div className='container__page-title'>
                    <h1> 
                        Contact <span className='span__title'> Me </span>
                    </h1>
                </div>

                <div className='container__page-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='container__content'>
                            <div className='container__name'>
                                <div className='label_name'>
                                    <label> Name </label>
                                </div>
                                <input type="text" name="name" placeholder='Full Name' required/>
                            </div>

                            <div className='container__email'>
                                <div className='label_email'>
                                    <label> Email </label>
                                </div>
                                <input type="email" name="email" placeholder='example@gmail.com' required/>
                            </div>
                        </div>
                        <div className='container__message'>
                            <div className='label_message'>
                                <label> Message </label>
                            </div>
                            <textarea placeholder='Hello Tom,' name="message" required/>
                        </div>
                        <div className='container__button'>
                            <button type='submit'>
                                <div className='daron'>
                                    Send
                                    <SendIcon className='button__send'/>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}  

export default Contact
