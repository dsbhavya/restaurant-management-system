import React, { useState } from 'react';
import './Reservation.css';
import Navbar from './Navbar';
function Reservation() {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundSize: 'cover',
  };
  const initialFormData = {
    name: '',
    email: '',
    password: '',
    date: '',
    time: '',
    members: '',
    preference: 'Indoor',
    phoneNumber: '',
    specialOccasions: '',
    allergies: '',
    specialRequest: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation (you can customize this)
    if (!formData.name || !formData.email || !formData.password || !formData.date || !formData.time || !formData.members || !formData.phoneNumber) {
      setSubmissionMessage('Please fill out all required fields.');
      return;
    }

    fetch('/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmissionMessage(data.message);

        // Optionally, reset the form after successful submission
        setFormData(initialFormData);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div><Navbar/>
    <div style={containerStyle}>
      
          <div className="reservation-form">
            
      <h1>Table Reservation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number of Members:</label>
          <input
            type="number"
            name="members"
            value={formData.members}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Seating Preference:</label>
          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Special Occasions:</label>
          <select
            name="specialOccasions"
            value={formData.specialOccasions}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Food Allergies:</label>
          <select
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="None">None</option>
            <option value="Gluten">Gluten</option>
            <option value="Dairy">Dairy</option>
            <option value="Nuts">Nuts</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Special Request:</label>
          <textarea
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Reserve</button>
      </form>
      {submissionMessage && (
        <p className="submission-message">{submissionMessage}</p>
      )}
    </div>
    </div>
    </div>
  );
}

export default Reservation;
