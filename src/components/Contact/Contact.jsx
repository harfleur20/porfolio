import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import email_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  // État pour gérer le statut de l'envoi
  const [result, setResult] = useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Message envoyé avec succès !");
        event.target.reset(); // Vide le formulaire
        
        // Efface le message de succès après 5 secondes
        setTimeout(() => setResult(""), 5000);
        } else {
        console.error("Erreur", data);
        setResult(data.message);
        }
    } catch (error) {
        console.error("Erreur réseau", error);
        setResult("Une erreur s'est produite. Vérifiez votre connexion.");
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Entrer en contact</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Parlons-en</h1>
            <p>Actuellement en Master spécialisé Expert en architecture et développement logiciel, je suis à la recherche d'un stage ou alternance en développement web.</p>
            <p>Je suis disponible également pour des missions freelance. N'hésitez pas à me contacter !</p>
            
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={email_icon} alt="" /> <p>kennetsasse@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+33 7 53 10 97 74</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Lyon, France</p>
                </div>
            </div>
        </div>

        {/* --- FORMULAIRE DYNAMIQUE --- */}
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Votre Nom</label>
            <input type="text" placeholder='Entrez votre nom' name='name' required/>
            
            <label htmlFor="">Votre Email</label>
            <input type="email" placeholder='Entrez votre email' name='email' required/>
            
            <label htmlFor="">Ecrivez votre message ici</label>
            <textarea name="message" rows="8" placeholder='Entrez votre message' required></textarea>
            
            <button type='submit' className="contact-submit">Envoyer maintenant</button>
            
            {/* Message de statut */}
            {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact