import React, { useState } from 'react';
import './QuoteModal.css';
import { IoClose } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";

const QuoteModal = ({ isOpen, onClose, initialService }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService || '', 
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState(""); 

  // Liste des services
  const servicesList = [
    "IA & Automatisation",
    "Conception d'un logo",
    "Identité visuelle",
    "UI/UX Design",
    "Site Web",
    "Application Web/Mobile",
    "E-commerce"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const objectToSend = {
      ...formData,
      access_key: accessKey
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(objectToSend)
      });

      const res = await response.json();

      if (res.success) {
        setStatus("success");
        setTimeout(() => {
            onClose();
            setStatus(""); 
            setFormData({ name: '', email: '', service: '', budget: '', message: '' });
        }, 3000);
      } else {
        setStatus("error");
        console.error("Erreur Web3Forms:", res);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content" onClick={(e) => e.stopPropagation()}>
        <IoClose className="quote-modal-close" onClick={onClose} />
        
        <div className="quote-modal-header">
          <h2>Demander un Devis</h2>
          <p>Parlez-moi de votre projet</p>
        </div>

        {status === "success" ? (
            <div className="success-message">
                <h3>Message envoyé ! <IoRocketSharp className='rocket'/></h3>
                <p>Merci {formData.name}, je vous recontacterai très vite.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-group">
                    <label>Votre Nom</label>
                    <input type="text" name="name" required placeholder="Votre Nom" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Votre Email</label>
                    <input type="email" name="email" required placeholder="email@exemple.com" value={formData.email} onChange={handleChange} />
                </div>
                
                <div className="form-group row">
                    <div className="half">
                        <label>Service</label>
                        <select name="service" required value={formData.service} onChange={handleChange}>
                            <option value="">Choisir un service...</option>
                            {servicesList.map((svc, index) => (
                                <option key={index} value={svc}>{svc}</option>
                            ))}
                            <option value="Autre">Autre demande</option>
                        </select>
                    </div>
                    {/* --- BUDGET RENDU OBLIGATOIRE --- */}
                    <div className="half">
                        <label>Budget</label>
                        <select name="budget" required value={formData.budget} onChange={handleChange}>
                            <option value="">Sélectionner...</option>
                            <option value="< 500€">&lt; 500€</option>
                            <option value="500€ - 1500€">500€ - 1500€</option>
                            <option value="1500€ - 5000€">1500€ - 5000€</option>
                            <option value="> 5000€">&gt; 5000€</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Détails du projet</label>
                    <textarea name="message" rows="4" required placeholder="Décrivez votre besoin..." value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="quote-submit-btn" disabled={status === "sending"}>
                    {status === "sending" ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
                {status === "error" && <p className="error-text">Une erreur est survenue.</p>}
            </form>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;