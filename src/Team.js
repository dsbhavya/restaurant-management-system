import React, { useState } from 'react';

const teamData = [
  
  {
    
    imgSrc:
      'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    title: 'John',
    description: 'CEO',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Mathew',
    description: 'General Manager',
  },
  {
    imgSrc:
      'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
    title: 'Peter',
    description: 'Branch Manager',
  },
  {
    imgSrc:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
    title: 'Jane',
    description: 'Supervisor',
  },
  {
    imgSrc:
      'https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg',
    title: 'Antony',
    description: 'Star Chef',
  },
  {
    imgSrc:
      'https://img.freepik.com/premium-photo/portrait-optimistic-man-30s-with-bristle-wearing-casual-t-shirt-posing-isolated-white_171337-91836.jpg',
    title: 'Shane',
    description: 'Star Chef',
  },
];

const GalleryItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="gallery-items" onClick={handleHover}>
      <div className={`item ${isHovered ? 'hovered' : ''}`}>
        <img src={item.imgSrc} alt={item.title} />
        <div className="item-title">
          <div className={`transparent-back ${isHovered ? 'hovered' : ''}`}></div>
          <div className="title-text">
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    
    <div className="full-gallery">
      <div className="team-heading">
        <h2>i</h2>
      </div>
      <div className="image-gallery">
        {teamData.map((item, index) => (
          <GalleryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
