import React, { useState } from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import upload from '../../assets/upload.png'
import figma from '../../assets/figma.png'

const Mywork = () => {
  const [selectedWork, setSelectedWork] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  
  // État initial à 6 cartes
  const [visibleCount, setVisibleCount] = useState(6)

  // Vérifier si tout est actuellement affiché
  const isAllShown = visibleCount >= mywork_data.length;

  const openModal = (work) => {
    setSelectedWork(work)
  }

  const closeModal = () => {
    setSelectedWork(null)
    setSelectedImage(null)
  }

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (!selectedWork?.w_images) return
    const currentIndex = selectedWork.w_images.indexOf(selectedImage)
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % selectedWork.w_images.length
    } else {
      newIndex = (currentIndex - 1 + selectedWork.w_images.length) % selectedWork.w_images.length
    }
    setSelectedImage(selectedWork.w_images[newIndex])
  }

  // Fonction pour alterner entre "Voir plus" et "Voir moins"
  const toggleVisible = () => {
    if (isAllShown) {
      setVisibleCount(6); // On revient à 6
      // Optionnel : scroller vers le haut de la section quand on réduit
      document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount(mywork_data.length); // On affiche tout
    }
  }

  return (
    <div className='mywork' id='work'>
      <div className="mywork-title">
        <h1>Travaux recents</h1>
      </div>
      
      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => {
          return (
            <div key={index} className="work-item" onClick={() => openModal(work)}>
              <img src={work.w_img} alt={work.w_name} />
              <div className="work-overlay">
                <h3 className="work-title">{work.w_name}</h3>
                <div className="work-categories">
                  {work.w_categories?.map((category, catIndex) => (
                    <span key={catIndex} className="work-category">{category}</span>
                  ))}
                </div>
                <span className={`work-status ${work.w_status.toLowerCase().replace(/\s+/g, '')}`}>
                  {work.w_status === 'online' ? 'En ligne' : 'En cours'}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Le bouton reste toujours visible si tu as plus de 6 projets au total */}
      {mywork_data.length > 6 && (
        <div className="mywork-showmore" onClick={toggleVisible}>
          <p>{isAllShown ? "Voir moins" : "Voir plus"}</p>
          <img 
            src={arrow_icon} 
            alt="" 
            style={{ transform: isAllShown ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} 
          />
        </div>
      )}

      {/* Modal principal */}
      {selectedWork && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-layout">
              <div className="modal-left">
                <img src={selectedWork.w_img} alt={selectedWork.w_name} className="modal-main-image" />
              </div>
              <div className="modal-right">
                <div className="modal-header">
                  <h1>{selectedWork.w_name}</h1>
                  <div className="modal-subtitle">
                    <span className="modal-year">{selectedWork.w_year}</span>
                    <span className="modal-type">• {selectedWork.w_type}</span>
                  </div>
                </div>
                <div className="modal-technologies">
                  <h3>Technologies utilisées</h3>
                  <div className="tech-tags">
                    {selectedWork.w_technologies?.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-description">
                  <h3>Description</h3>
                  <p>{selectedWork.w_description}</p>
                </div>
                <div className="modal-buttons">
                  {selectedWork.w_projectLink && (
                    <a href={selectedWork.w_projectLink} target="_blank" rel="noopener noreferrer" className="modal-btn project-btn">
                      <img src={upload} alt="" className='upload'/>Voir le projet
                    </a>
                  )}
                  {selectedWork.w_mockupLink && (
                    <a href={selectedWork.w_mockupLink} target="_blank" rel="noopener noreferrer" className="modal-btn mockup-btn">
                      <img src={figma} alt="" className='figma'/>Voir la maquette
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-bottom">
              <h3>Galerie du projet</h3>
              <div className="modal-gallery">
                {selectedWork.w_images?.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${selectedWork.w_name} ${index + 1}`} 
                    className="gallery-image"
                    onClick={() => openLightbox(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            {selectedWork?.w_images && selectedWork.w_images.length > 1 && (
              <>
                <button className="lightbox-nav lightbox-prev" onClick={() => navigateImage('prev')}>‹</button>
                <button className="lightbox-nav lightbox-next" onClick={() => navigateImage('next')}>›</button>
              </>
            )}
            <div className="lightbox-image-container">
              <img src={selectedImage} alt="Vue agrandie" className="lightbox-image" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mywork