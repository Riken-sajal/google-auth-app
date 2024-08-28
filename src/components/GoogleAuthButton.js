// src/components/GoogleAuthButton.js
import React from 'react';

const GoogleAuthButton = () => {
  const handleLogin = () => {
    // Redirect to Django backend for Google OAuth
    window.location.href = 'https://api.midfield.ai/auth/sign-in'; // Replace with your Django backend URL
  };

  return (
    <button onClick={handleLogin}>
      Sign in with Google
    </button>
  );
};

export default GoogleAuthButton;
