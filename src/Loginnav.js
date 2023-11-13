import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="logo-container">
          <img src="https://wallpapercave.com/wp/wp11030601.jpg" alt="Logo" className="logo" />
        </div>
        <ul className="navbar">
          <li>Hi, {user && (
            <span className="user-username">{user.username}</span>
          )}</li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/chef">CHEF</Link></li>
          <li><Link to="/Reservation">RESERVATION</Link></li>
          <li><Link to="/Blog">EVENTS</Link></li>
          <li><Link to="/review">REVIEW</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/signup">SIGNUP</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
