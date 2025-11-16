import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import email_icon from '../../assets/mail_icon.svg'
import phone_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'  

const Contact = () => {
  return (
    <div className='contact'id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm available for freelance projects, collaborations, or to discuss your next idea. Feel free to reach out via email or LinkedIn — I'd love to hear about your project.</p>
      
        <div className="contact-details">
            <div className="contact-detail">
                <img src={email_icon} alt="" />
                <p>kennetsasse@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={phone_icon} alt="" />
                <p></p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Limoges, France</p>
            </div>
          </div>
        </div>
          <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="mail" placeholder='Enter your mail' name='mail'/>
            <label htmlFor="" >White your message here</label>
            <textarea name="message" rows="8" placeholder='Ecris ton message ici'></textarea>
            <button type='submit' className='contact-submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
