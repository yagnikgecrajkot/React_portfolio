import React from 'react';
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g0j0kgy', 'template_c00qfym', form.current, 'Cjr8Ks8_faKH9lh0H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>kansagrayagnik2938@gmail.com</h5>
            <a href="mailto:kansagrayagnik2938@gmail.com"  target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsTelephone className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>70963 46057</h5>
            <a href="tel:7096346057"  target="_blank">Call Me</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 709 634 6057</h5>
            <a href="https://wa.me/+917096346057" target="_blank">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

      </div>
    </section>
  )
}

export default Contact;
