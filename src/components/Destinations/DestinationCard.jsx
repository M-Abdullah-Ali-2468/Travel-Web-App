import React from 'react';
import './Destinations.css';

function DestinationCard({ title, description, images, reverse }) {
  return (
    <div className={`first ${reverse ? 'reverse' : ''}`}>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="images">
        {images.map((img, idx) => (
          <img key={idx} className={`imgs ${idx === 0 ? 'one' : 'two'}`} src={img} alt="TourImg" />
        ))}
      </div>
    </div>
  );
}

export default DestinationCard;
