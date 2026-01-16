import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import user from "../../assets/user_icon.png";
import SocialModal from "../SocialMedia/SocialMedia";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const [isManualClick, setIsManualClick] = useState(false);
  const clickTimeoutRef = useRef(null);

  // 🔧 Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      // Glass effect après 50px de scroll
      setScrolled(window.scrollY > 50);
      
      // Si c'est un clic manuel, on ignore la détection automatique
      if (isManualClick) return;
      
      // Détection automatique des sections visibles
      const sections = ["home", "about", "service", "work", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setMenu(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Appel initial pour définir l'état correct au chargement
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [isManualClick]);

  // 🔧 Fonction pour gérer le clic sur un lien
  const handleMenuClick = (menuItem) => {
    // 1. Définir immédiatement le menu cliqué
    setMenu(menuItem);
    
    // 2. Fermer le menu mobile
    setMenuOpen(false);
    
    // 3. Activer le mode "clic manuel" pour ignorer la détection automatique
    setIsManualClick(true);
    
    // 4. Nettoyer le timeout précédent s'il existe
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    
    // 5. Réactiver la détection automatique après 1.5 secondes
    // (le temps que le scroll animé soit terminé)
    clickTimeoutRef.current = setTimeout(() => {
      setIsManualClick(false);
    }, 1500);
  };

  // 🔧 Fermer le menu en cliquant sur l'overlay
  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  // 🔧 Ouvrir le modal des réseaux sociaux
  const handleConnectClick = () => {
    setIsSocialModalOpen(true);
  };

  // 🔧 Fermer le modal des réseaux sociaux
  const handleCloseSocialModal = () => {
    setIsSocialModalOpen(false);
  };

  const menuItems = [
    { id: "home", label: "Acceuil", href: "#home" },
    { id: "about", label: "Qui suis-je?", href: "#about", offset: 80 },
    { id: "service", label: "Services", href: "#service", offset: 80 },
    { id: "work", label: "Portfolio", href: "#work", offset: 80 },
    { id: "contact", label: "Contact", href: "#contact", offset: 80 },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={logo2} alt="Logo" className="logo-scroll" />

      {/* Menu Hamburger */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className="anchor-link"
              offset={item.offset || 0}
              href={item.href}
              onClick={() => handleMenuClick(item.id)}
            >
              <p>{item.label}</p>
            </AnchorLink>
            {menu === item.id && (
              <img src={underline} alt="" className="underline-logo" />
            )}
          </li>
        ))}
      </ul>

      {/* Overlay pour fermer le menu mobile */}
      {menuOpen && (
        <div className="menu-overlay" onClick={handleOverlayClick} />
      )}

      {/* Bouton "Se connecter à moi" */}
      <div className="nav-connect" onClick={handleConnectClick}>
        <img src={user} alt="Icône utilisateur" />
        <span>Se connecter à moi</span>
      </div>

      {/* Modal des réseaux sociaux */}
      <SocialModal
        isOpen={isSocialModalOpen}
        onClose={handleCloseSocialModal}
      />
    </nav>
  );
};

export default Navbar;