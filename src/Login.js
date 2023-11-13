import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import Loginnav from './Loginnav';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (password === 'mounisha') {
      // Correct password, perform login action
      alert('Login Successfully');
      navigate('/Reservation');
    } else {
      // Incorrect password
      alert('Invalid username or password');
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://cdn.pixabay.com/photo/2017/03/02/02/16/place-setting-2110245_1280.jpg')`,
    backgroundSize: 'cover',
  };

  const cardStyle = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '400px',
    minHeight: '300px',
    padding: '2rem',
    color: 'black',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1rem',
  };

  const inputStyle = {
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
    width: '100%',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <Loginnav />
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div className="col-md-12">
            <h3 className="card-title text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4634/4634838.png"
                alt="Logo"
                width="100"
              />
            </h3>
            <form onSubmit={handleLogin} className="login">
              <div style={inputContainerStyle}>
                <i className="fa fa-envelope" style={iconStyle}></i>
                <input
                  type="text"
                  id="username"
                  name="username"
                  style={inputStyle}
                  required
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div style={inputContainerStyle}>
                <i className="fa fa-lock" style={iconStyle}></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  style={inputStyle}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />{' '}
                  Remember Me
                </label>
              </div>

              <div className="mb-3 text-center">
                <button style={buttonStyle} type="submit">
                  Login
                </button>
              </div>
              <p className="text-center">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
