import React from 'react'; // Ensure React is imported
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src="/Images/digitalFlakelogo.png" alt="Digital Flake Logo" className="Logo" />
      <h1 className="text-2xl">Welcome to DigitalFlake Admin</h1>
    </div>
  );
};

export default Home;