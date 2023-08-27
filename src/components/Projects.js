import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = require("./ListProjects.js"); 
function Projects() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };
  const handleSource = () => {
    window.open("https://github.com/erikalls18/FullStack-Applicaction/tree/master/finalproject3600", "_blank"); 
  };
    
     return (
       <div className="container-projects">
        <h2 className="title-project">Applications  </h2>
        

        <div className="container-cards">

       
       {projects.map((project, id) => (
            <div key={project.id} className="card-project" onClick={() => openModal(project)}>
                 <h3 className='tittle-project'>{project.name}</h3>
                <img src={project.image} alt={project.name}className="img-card" />
               {/*<button onClick={() => openModal(project)}  className="button-details"> Show Details</button>*/}
            </div>
            ))}
             
         </div>
        
         {modalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content card-project">
            <h2 className='tittle-project-modal'>{selectedProject.name} </h2>
            {selectedProject.images2 ? (
              <Carousel className='carrusel'>
                {selectedProject.images2.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index}`}className='img-carrusel'  />
                  </div>
                ))}
              </Carousel>
            ) : (
            <img src={selectedProject.image} alt={selectedProject.name}className="img-card-modal" />
            )}
            
            <p className="description-modal">{selectedProject.description}</p>
            <p className='card-tech-modal'><strong>Technologies used:</strong> {selectedProject.technologies}</p>
            <button  className="button-source"onClick={handleSource} >Source</button>
            <button onClick={closeModal} className="close-modal">X</button>
          </div>
          
        </div>
      )}
    <p className="message">More Coming Soon...</p>
    </div>
     );
 }
 
 export default Projects;