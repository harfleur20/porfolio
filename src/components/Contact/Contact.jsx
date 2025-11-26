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
        <h1>Entrer en contact</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Parlons-en</h1>
            <p>Actuellement en Master sépcialisé Expert en architecture et developpement logiciel, je suis à la recherche d'un stage ou alternance en développement web.</p>
      
            <p>Je suis disponible également pour des missions freelance, des collaborations ou pour discuter de votre prochaine idée. N'hésitez pas à me contacter par e-mail ou via LinkedIn. je serais ravi d'échanger sur votre projet.</p>
      
        <div className="contact-details">
            <div className="contact-detail">
                <img src={email_icon} alt="" />
                <p>kennetsasse@gmail.com</p>
            </div>
            {/* <div className="contact-detail">
                <img src={phone_icon} alt="" />
                <p></p>
            </div> */}
            <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Limoges, France</p>
            </div>
          </div>
        </div>
          <form className="contact-right">
            <label htmlFor="">votre nom</label>
            <input type="text" placeholder='Entrez votre nom' name='name'/>
            <label htmlFor="">votre email</label>
            <input type="mail" placeholder='Entrez votre mail' name='mail'/>
            <label htmlFor="" >Laisse ton message ici</label>
            <textarea name="message" rows="8" placeholder='Ecris ton message ici'></textarea>
            <button type='submit' className='contact-submit'>Envoyer</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
