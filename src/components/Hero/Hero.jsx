import React, { useEffect, useRef } from 'react'
import './Hero.css'
import fkpic from '../../assets/fk-pic.png'

function Hero() {
  const starsContainerRef = useRef(null);

  // Création des étoiles animées
  useEffect(() => {
    const container = starsContainerRef.current;
    if (!container) return;

    // Nettoyer les étoiles existantes
    container.innerHTML = '';

    // Créer 150 étoiles
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Position aléatoire
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Taille aléatoire entre 1px et 3px
      const size = Math.random() * 2 + 1;
      
      // Durée d'animation aléatoire entre 3 et 8 secondes
      const duration = Math.random() * 5 + 3;
      
      // Délai aléatoire
      const delay = Math.random() * 5;
      
      star.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        width: ${size}px;
        height: ${size}px;
        --duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      
      container.appendChild(star);
    }

    // Nettoyage
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className='hero' id='home'>
      {/* Fond spatial animé */}
      <div ref={starsContainerRef} className="stars-container"></div>
      
      {/* Nébuleuses colorées */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      <div className="hero-content">
        {/* Image à gauche */}
        <div className="hero-image">
          <img src={fkpic} alt="Alex Bennett - Frontend Developer" />
        </div>

        {/* Texte à droite */}
        <div className="hero-text">
          <h1>
            <span>Francis Kenne</span>,<br />
            Frontend Developer<br />
            basé en France.
          </h1>
          <p>
            Stage | Alternance | Freelance
          </p>
          <div className="hero-action">
            {/* <button className="hero-connect">Connect with me</button> */}
            <button className="hero-resume">Télecharger mon CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero