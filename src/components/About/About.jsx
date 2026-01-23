import React, { useEffect, useRef } from 'react'
import './About.css'
import profile_img from '../../assets/react.png'

function About() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  
  useEffect(() => {
    // Création des étoiles
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

    // Observer pour l'animation des compétences
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.about-skill hr');
            
            // Animer chaque barre avec un délai progressif
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate');
              }, index * 200); // 200ms entre chaque animation
            });
            
            // Arrêter d'observer après l'animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Déclenche quand 30% est visible
        rootMargin: '0px 0px -50px 0px' // Déclenche un peu avant
      }
    );

    const currentSkillsRef = skillsRef.current;
    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }

    return () => {
      const container = document.querySelector('.about-stars');
      if (container) container.innerHTML = '';
      
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
    };
  }, []);

  return (
    <div className='about' id='about' ref={aboutRef}>
        {/* Étoiles en fond */}
        <div className="about-stars"></div>
        
        <div className="about-title">
            <h1>A propos de moi</h1>
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
                
              <div className="about-skills" ref={skillsRef}>
                <div className="about-skill">
                    <p>Next JS</p> 
                    <hr style={{ '--skill-width': '35%' }} />
                </div>
                <div className="about-skill">
                    <p>React JS</p> 
                    <hr style={{ '--skill-width': '50%' }} />
                </div>
                <div className="about-skill">
                    <p>Javascript</p> 
                    <hr style={{ '--skill-width': '40%' }} />
                </div>
                <div className="about-skill">
                    <p>Node JS</p> 
                    <hr style={{ '--skill-width': '30%' }} />
                </div>
                <div className="about-skill">
                    <p>Infra | CI/CD</p> 
                    <hr style={{ '--skill-width': '20%' }} />
                </div>
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