import React, { useState, useEffect, useRef } from 'react'
import './Services.css'
// import themePattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import rotationicon from '../../assets/rotation.png'

// Importe tes logos
import figma from '../../assets/figma.png'
import dev from '../../assets/dev.png'
import chatbot from '../../assets/chatbot.png'

const Services = ({setIsModalOpen}) => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  // Effet pour les étoiles et comètes
  useEffect(() => {
    // Étoiles
    const starsContainer = document.querySelector('.services-stars');
    if (starsContainer) {
      starsContainer.innerHTML = '';
      
      for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'services-star';
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 1.5 + 0.5;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 3;
        
        star.style.cssText = `
          left: ${left}%;
          top: ${top}%;
          width: ${size}px;
          height: ${size}px;
          --duration: ${duration}s;
          animation-delay: ${delay}s;
        `;
        
        starsContainer.appendChild(star);
      }
    }

    return () => {
      const starsContainer = document.querySelector('.services-stars');
      const cometsContainer = document.querySelector('.services-comets');
      if (starsContainer) starsContainer.innerHTML = '';
      if (cometsContainer) cometsContainer.innerHTML = '';
    };
  }, []);

  // Gestionnaire d'événements amélioré pour la rotation
  const handleCardInteraction = (index, isEntering) => {
    setActiveCard(isEntering ? index : null);
  };

  // Fonction pour obtenir le logo selon le service
  const getServiceLogo = (serviceName) => {
    if (!serviceName) return dev;

    // Normaliser le nom (minuscules, enlever accents) pour un matching robuste
    const key = serviceName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s/&-]/g, '');

    // Détections basées sur mots-clés
    if (key.includes('ui') || key.includes('ux') || key.includes('ui/ux') || key.includes('figma')) {
      return figma;
    }

    if (key.includes('ia') || key.includes('automatis') || key.includes('automation')) {
      return chatbot;
    }

    if (key.includes('web') || key.includes('mobile') || key.includes('dev') || key.includes('developp') || key.includes('devel')) {
      return dev;
    }

    return dev; // fallback
  };

  return (
    <div className='services' id='service'>
        {/* Effets galaxy */}
        <div className="services-stars"></div>
        <div className="services-comets"></div>
        
        <div className="services-title">
          <h1>Mes Services</h1>
          {/* <img src={themePattern} alt="Theme pattern" /> */}
        </div>
        
        <div className="services-container">
            {Services_Data.map((service, index) => {
              const serviceLogo = getServiceLogo(service.s_name);
              
              return (
                <div 
                  key={index} 
                  ref={el => cardRefs.current[index] = el}
                  className={`services-card ${activeCard === index ? 'active' : ''}`}
                  onMouseEnter={() => handleCardInteraction(index, true)}
                  onMouseLeave={() => handleCardInteraction(index, false)}
                  onTouchStart={() => handleCardInteraction(index, true)}
                  onTouchEnd={() => handleCardInteraction(index, false)}
                  onClick={() => handleCardInteraction(index, activeCard !== index)}
                >
                  {/* CONTENEUR DE BRILLANCE SÉPARÉ */}
                  <div className="card-shine-container"></div>
                  
                  {/* Face 1 - Front avec Logo */}
                  <div className="card-front">
                    <div className="service-icon">
                      <img src={serviceLogo} alt={`${service.s_name} icon`} className="service-logo" />
                    </div>
                    <h2>{service.s_name}</h2>
                    <div className="service-preview">
                      <p>{service.s_desc}</p>
                    </div>
                    <div className="service-image">
                      <img src={rotationicon} alt="Rotation indicator" />
                    </div>
                  </div>

                  {/* Face 2 - Back avec le MÊME Logo */}
                  <div className="card-back">
                    {/* Même logo que la face 1 */}
                    <div className="service-icon-back">
                      <img src={serviceLogo} alt={`${service.s_name} icon`} className="service-logo" />
                    </div>
                    
                    <h2>{service.s_name}</h2>
                    
                    <div className="service-details">
                      {service.s_features && service.s_features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="feature-bullet"></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="service-cta">
                      <button  onClick={() => setIsModalOpen(true)} className="cta-button">
                        Demander un devis
                        <img src={arrow_icon} alt="Arrow icon" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

    </div>
  )
}

export default Services