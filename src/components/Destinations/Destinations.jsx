import React from 'react';
import './Destinations.css';
import DestinationCard from './DestinationCard';

import first from '../../assets/1.jpg';
import second from '../../assets/2.jpg';
import third from '../../assets/3.jpg';
import fourth from '../../assets/4.jpg';
import fifth from '../../assets/5.jpg';
import sixth from '../../assets/6.jpg';

function Destinations() {
  return (
    <div className="destination">
      <div className='dest-intro'>
        <h1>Popular Destinations</h1>
        <p className='intro-text'>Discover the most loved travel spots that captivate millions of hearts worldwide.</p>
      </div>

      <DestinationCard
        title="Banff National Park, Canada"
        description={`Banff National Park is a stunning natural escape in the Canadian Rockies.
It features crystal-clear lakes, towering peaks, and lush green forests.
Visitors enjoy hiking, wildlife watching, and relaxing hot springs.
The beauty of Lake Louise and Moraine Lake is truly unforgettable.
It’s a perfect year-round destination for nature and adventure lovers.`}
        images={[first, second]}
        reverse={false}
      />

      <DestinationCard
        title="Santorini, Greece"
        description={`Santorini is one of the most iconic islands in Greece, known for its whitewashed buildings with blue domes.
It offers breathtaking sunsets, cliffside villages, and beautiful beaches.
Visitors love exploring Oia, enjoying Mediterranean cuisine, and sailing in the Aegean Sea.
Santorini is a perfect romantic getaway and a photographer's paradise.`}
        images={[third, fourth]}
        reverse={true}
      />

      <DestinationCard
        title="Kyoto, Japan"
        description={`Kyoto is a city that perfectly blends tradition and modernity.
Famous for its ancient temples, beautiful gardens, and traditional tea houses.
Visitors enjoy walking through bamboo forests, wearing kimonos, and attending cultural festivals.
It's a peaceful destination filled with history, nature, and spiritual beauty.`}
        images={[fifth, sixth]}
        reverse={false}
      />
    </div>
  );
}

export default Destinations;
