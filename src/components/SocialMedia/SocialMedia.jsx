import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './SocialModal.css'

// icon importation
import linkedin from '../../assets/linkedin.webp'
import GitLab from '../../assets/github.png'
import discord from '../../assets/discord.png'

const SocialModal = ({ isOpen, onClose }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: GitLab, // Ceci est un string (chemin)
      url: 'https://github.com/harfleur20/porfolio',
      color: '#d1d1d1ff'
    },
    {
      name: 'LinkedIn', 
      icon: linkedin, // Ceci est un string (chemin)
      url: 'https://www.linkedin.com/in/kenne-tsasse-919782339/',
      color: '#caedffff'
    },
    {
      name: 'Discord',
      icon: discord, // Ceci est un string (chemin)
      url: 'https://discord.gg/Kenn20',
      color: '#5865f2'
    }
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="social-modal-overlay" onClick={onClose}>
      <div className="social-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="social-modal-close" onClick={onClose}>
          ×
        </button>
        
        <h2 className="social-modal-title">Connectons-nous !</h2>
        <p className="social-modal-subtitle">Retrouvez-moi sur mes réseaux</p>
        
        <div className="social-links-grid">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
              style={{ '--social-color': social.color }}
            >
              {/* CORRECTION : Utiliser une balise img pour afficher l'icône */}
              <div className="social-icon">
                <img src={social.icon} alt={`${social.name} icon`} />
              </div>
              <div className="social-info">
                <span className="social-name">{social.name}</span>
                <span className="social-url">{social.url.replace('https://', '')}</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="social-modal-footer">
          <p>N'hésitez pas à me contacter !</p>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default SocialModal