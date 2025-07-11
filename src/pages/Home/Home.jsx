import React from 'react';
import './Home.css';
import travelimg from '../../assets/12.jpg';
import { Link } from 'react-router-dom';
import Destinations from '../../components/Destinations/Destinations';
import Trip from '../../components/TravelCard/Trip';

function Home() {
  return (
    <>
    <div className='Hero-section'>
      <img className='hero-img' src={travelimg}  />
      <div className="hero-content">
        <h1 className='heading'>Your Journey Your Story</h1>
        <p className='text'>Choose Your Favourite Destination</p>
        <Link className='travel'>Travel Plan</Link>
      </div>
    </div>
    <Destinations />
    <Trip />
    </>
    
  );
}

export default Home;
