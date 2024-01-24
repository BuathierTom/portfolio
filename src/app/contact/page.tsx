import React from 'react';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
    return (
        <main id="contact">
            <div className='container__page'>
                <div className='container__page-title'>
                    <h1> 
                        Contact <span className='span__title'> Me </span>
                    </h1>
                </div>

                <div className='container__page-form'>
                    <form action="https://formspree.io/f/xayrwkrn" method="POST">
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
