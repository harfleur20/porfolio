import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <img src={footer_logo} alt="" />
        
        <p>Je suis développeur frontend, basé en France <br /> avec 2 d'expérience.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter votre email' />
                <div className="footer-subscribe">
                    souscrire
                </div>
            </div>
        </div>
      </div>
     <hr />
     <div className="footer-bottom">
     <div className="footer-bottom-left">copyright 2025 Francis Kenne All rights</div>
     <div className="footer-bottom-right">
        <p>Term of Servives</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
     </div>
     </div>
    </div>
  )
}

export default Footer
