import React, { useEffect } from 'react'
import './About.css'
// import themePattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/react.png'

function About() {
  useEffect(() => {
    const container = document.querySelector('.about-stars');
    if (!container) return;

    container.innerHTML = '';

    // Créer 60 étoiles
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.className = 'about-star';
      
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
      
      container.appendChild(star);
    }

    return () => {
      const container = document.querySelector('.about-stars');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className='about' id='about'>
        {/* Étoiles en fond */}
        <div className="about-stars"></div>
        
        <div className="about-title">
            <h1>A propos de moi</h1>
            {/* <img src={themePattern} alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                  <p>Je suis un développeur Fullstack, UI/UX Designer & Graphiste, capable de concevoir de l'identité visuelle à la conception d'applications web interactives et responsives.</p>
                  <p>Spécialisé en React, JavaScript et technologies web modernes, je transforme les maquettes en expériences numériques fluides.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Next JS</p> <hr style={{width:"45%"}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Javascript</p> <hr style={{width:"55%"}}/></div>
                    <div className="about-skill"><p>Node JS</p> <hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Infra | CI/CD</p> <hr style={{width:"25%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>ANS D'EXEPRIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJETS COMPLETES</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>CLIENTS SATISFAIT</p>
            </div>
        </div>
    </div>
  )
}

export default About