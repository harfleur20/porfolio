import React from 'react';
import Marquee from 'react-fast-marquee';
import './logosScroll.css';

const LogosScroll = () => {
  const logos = [
    { name: 'MongoDB', src: '/logos/mongodb-icon-1.svg' },
    { name: 'Javascript', src: '/logos/JavaScript-logo.png' },
    { name: 'Docker', src: '/logos/docker.png'},
    { name: 'React JS', src: '/logos/React-icon.svg.png'},
    { name: 'Typescript', src: '/logos/typescript_plain_logo.webp' },
    { name: 'AWS', src: '/logos/logoaws.png' },
    { name: 'Figma', src: '/logos/figma.png' },
    { name: 'Tailwind CSS', src: '/logos/Tailwind_CSS_Logo.svg.png' },
    { name: 'Terraform', src: '/logos/terraform.png' },
    { name: 'Kubernetes', src: '/logos/Kubernetes_logo_without_workmark.svg.png' },
    { name: 'PostgreSQL', src: '/public/logos/Postgresql_elephant.svg' }
  ];

  const logo2 = [
    { name: 'Supabase', src: '/logos/supabase.png' },
    { name: 'MySQL', src: '/logos/MySQL.svg' },
    { name: 'Node JS', src: '/logos/Node.png'},
    { name: 'Gitlab CI/CD', src: '/logos/gitlab.svg'},
    { name: 'Python', src: '/logos/Python-logo.png' },
    { name: 'Github', src: '/logos/github-logo.png' },
    { name: 'Sass', src: '/logos/logo_sass-6.png' },
    { name: 'Ansible', src: '/public/logos/Ansible_logo.svg.png' },
    { name: 'Jenkins', src: '/logos/Jenkins_logo.svg.png' },
    { name: 'Vagrant', src: '/logos/Vagrant.png' }
  ];

  return (
    <div className="logos-scroll-container">
      {/* Ligne du haut : droite → gauche */}
      <Marquee 
        direction="left" 
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="marquee-top"
      >
        {logos.map((logo, index) => (
          <div key={`top-${index}`} className="logo-item">
            <img src={logo.src} alt={logo.name} />
            <span>{logo.name}</span>
          </div>
        ))}

      </Marquee>

      {/* Ligne du bas : gauche → droite */}
      <Marquee 
        direction="right" 
        speed={40}
        gradient={false}
        pauseOnHover={true}
        className="marquee-bottom"
      >
        {logo2.map((logo2, index) => (
          <div key={`bottom-${index}`} className="logo-item">
            <img src={logo2.src} alt={logo2.name} />
            <span>{logo2.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogosScroll;