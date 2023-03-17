import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md' 
import { RiMessengerLine } from 'react-icons/ri' 
import {BsWhatsapp} from 'react-icons/bs' 


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
     
      <div className="container contact_container">
        <div className="contact_options">

        <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>sid1997@gmail.com</h5>
          <a href="mailto:sid1997@gmail.com" target='_blank'> Send a Message</a>
        </article>

        <article className="contact_option">
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>sid1997@gmail.com</h5>
          <a href="https://facebook.com" target='_blank' > Send a Message</a>
        </article>

        <article className="contact_option">
          <BsWhatsapp  className='contact_option-icon'/>
          <h4>whatsApp</h4>
          <h5>+12345678</h5>
          <a href="https://api.whatsapp.com/send?photo+12345678" target='_blank'> Send a Message</a>
        </article>
      </div>

      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="text" name='name' placeholder='Your Email' required/>
        <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
        <button type="submit" className='btn btn_primary'> Send Massage</button>
      </form>
      </div>


    </section >
  )
}

export default Contact