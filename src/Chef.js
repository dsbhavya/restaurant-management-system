import React, { useState } from 'react';
import "./Chef.css";
import Navbar from './Navbar';
const Chef = () => {
    <>
    <h1>our chef</h1>
    <h1>our chef</h1></>

  const [slots, setSlots] = useState([
    
    {
      title: 'Nick',
      
      image: 'https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg',
      
    },
    {
      title: 'Austin',
      
      image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?cs=srgb&dl=pexels-miquel-ferran-gomez-figueroa-3814446.jpg&fm=jpg',
      
    },
    {
      title: 'Kristopher',
      
      image: 'https://static5.depositphotos.com/1003434/514/i/450/depositphotos_5147838-stock-photo-attractive-smiling-cook.jpg',
      
    },
    {
      title: 'Boopafina',
      
      image: 'https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg',
      
    },
    {
      title: 'Charles Bumeowski',
      
      image: 'https://im.rediff.com/getahead/2015/mar/27chef-ranveer-brar-1.jpg',
      
    },
    {
      title: 'John',
      
      image: 'https://tajdining.com/uploads/chefs/small/53_small_2022_07_26_03_37_47.jpg',
    
    },
    {
        title: 'Sanjeev kapoor',
        
        image: 'https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india1.jpg',
      
      },
      {
        title: 'Vikas khanna',
        
        image: 'https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india2.jpg',
      
      },
      {
        title: 'Sharma',
        
        image: 'https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india3.jpg',
      
      },
      {
        title: 'Ranveer Bhar',
        
        image: 'https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india6.jpg',
      
      },
      {
        title: 'Anjum anand',
        
        image: 'https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india5.jpg',
      
      },
      {
        title: 'Vineet bhatia',
        
        image: 'https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india7.jpg',
      
      },
  ]);

  const toggleBio = (index) => {
    const updatedSlots = [...slots];
    updatedSlots[index].showBio = !updatedSlots[index].showBio;
    setSlots(updatedSlots);
  };

  return (
    <div><Navbar/>
    <div className="about__section">
      
            {slots.map((slot, index) => (
        <div className={`about__slot ${slot.showBio ? 'bio' : ''}`} key={index}>
          <a href="/page" title={slot.title} onClick={() => toggleBio(index)}>
            <div
              className="headshot"
              style={{ backgroundImage: `url('${slot.image}')` }}
            ></div>
            <div className="about__info">
              <h4 className="name">{slot.title}</h4>
              <h5 className="title">{slot.role}</h5>
            </div>
            {slot.showBio && <div className="bioText">{slot.bio}</div>}
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Chef;
