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
          <p>Je suis résilient et optiministe, mon objectif est de migrer mes compétences vers l'infra & le cloud.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter votre email' />
          </div>
          <div className="footer-subscribe">
            souscrire
          </div>
        </div>
      </div>
      <hr className='barre' />
      <div className="footer-bottom">
        <div className="footer-bottom-left">©copyright 2025 Francis Kenne All rights</div>
        <div className="footer-bottom-right">
          {/* Remplacement des <p> par des liens ou des éléments avec classe cliquable */}
          <p className="footer-link">Termes et Servives</p>
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Se connecter à moi</p>
        </div>
      </div>
    </div>
  )
}

export default Footer