import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOut, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function NavigationLog(){
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
      <ul className="nav-bar">
      <div className="logo">
        <img src="brand1.png" alt="logo" />
        <span className="brand-name">FunPlans</span>
      </div>
        <li><Link to="/herosection">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reserve</Link></li>

        <div className="right-corner">
        <li><Link to="/profile" className="user-link" title="Profile"><FontAwesomeIcon icon={faUserCircle} /><li>Hi,{user && (
        <span className="user-username">{user.username}</span>
      )}</li> </Link></li>
        <li className="dropdown-trigger">
        <Link to="/home" title='Logout'><FontAwesomeIcon icon={faSignOut} /> </Link>
          </li>
          </div>
          </ul>
        
      </nav>
  );
};

export default NavigationLog;
