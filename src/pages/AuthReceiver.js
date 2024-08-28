// src/pages/AuthReceiver.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthReceiver = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the authorization code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Make a request to your Django backend to exchange the code for tokens and user data
      axios.get(`http://localhost:8000/exchange-code/?code=${code}`)
        .then(response => {
          const { 'auth-token': authToken, 'user-data': userData } = response.data;

          // Store the auth token and user data in localStorage
          localStorage.setItem('auth-token', authToken);
          localStorage.setItem('user-data', JSON.stringify(userData));

          // Redirect to the dashboard page
          navigate('/dashboard');
        })
        .catch(error => {
          console.error("Authentication Error:", error.response || error.message);
          setError('Failed to authenticate. Please try again.');
        });
    } else {
      setError('Authorization code is missing.');
    }
  }, [navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  return <div>Authenticating...</div>;
};

export default AuthReceiver;
