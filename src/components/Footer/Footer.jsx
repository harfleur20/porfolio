import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import SocialModal from '../SocialMedia/SocialMedia' // 1. On importe le modal Réseaux Sociaux

const Footer = () => {

  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);

  // Fonction pour ouvrir le modal
  const openSocialModal = () => {
    setIsSocialModalOpen(true);
  }

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Je suis résilient et optimiste, mon objectif est de migrer mes compétences vers l'infra & le cloud.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Entrer votre email' />
          </div>
          <div className="footer-subscribe">
            Souscrire
          </div>
        </div>
      </div>
      <hr className='barre' />
      <div className="footer-bottom">
        <div className="footer-bottom-left">©Copyright 2025 Francis Kenne All rights reserved</div>
        <div className="footer-bottom-right">
          <p className="footer-link">Termes et Services</p>
          <p className="footer-link">Privacy Policy</p>
          

          <p className="footer-link" onClick={openSocialModal}>
            Se connecter à moi
          </p>
        </div>
      </div>

 
      <SocialModal 
        isOpen={isSocialModalOpen} 
        onClose={() => setIsSocialModalOpen(false)} 
      />
    </div>
  )
}

export default Footer