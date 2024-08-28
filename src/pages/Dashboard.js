// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('user-data'));
    setUserData(storedUserData);
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {userData.name}</h2>
      <img src={userData.picture} alt="Profile" />
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default Dashboard;
