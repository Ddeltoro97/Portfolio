import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import styles from './Contact.module.css'

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rq1ib4o', 'template_4b7l4cn', form.current, 'fZpQc9RAoWb4GA1p9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const [modal, setModal] = useState(false)

    const toggle = () =>{
        setModal(!modal);
    }

    const [validate, setValidate] = useState({
        name: "",
        email: "",
        message: "",
    });

    const changeName = (event) =>{
        setValidate({
            ...validate,
            name: event.target.value
        })
    }
    const changeMail = (event) =>{
        setValidate({
            ...validate,
            email: event.target.value
        })
    }
    
    const changeMessage = (event) =>{
        setValidate({
            ...validate,
            message: event.target.value
        })
    }


    console.log(validate)
    return(
        <div>
            <h1>Contact me</h1>
            <hr />
            <p>Feel free to contact me, you can send me an email and I'll make sure to read it.</p>
            <div>
                <form className={styles.block} ref={form} onSubmit={sendEmail}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} type="text" name="user_name" value={validate.name} onChange={changeName}/>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="email" name="user_email" value={validate.email} onChange={changeMail} />
                    <label className={styles.label}>Message</label>
                    <textarea className={styles.textBox} name="message" value={validate.message} onChange={changeMessage}/>
                    <button disabled={!validate.name || !validate.email || !validate.message || validate.name.startsWith(' ') || validate.message.startsWith(' ') || validate.email.startsWith(' ') ||  validate.email.trim() === '' || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(validate.email)} className={styles.button} onClick={toggle} type="submit">Send</button>
                </form>
            </div>
            
            <div style={{display: modal ? 'grid' : 'none'}} className={styles.modal}>
                <h3>
                Email sent, I will reply to you ASAP!
                </h3>
                <button className={styles.modalButton} onClick={toggle}>Okay</button>
            </div>
        </div>
    )
}