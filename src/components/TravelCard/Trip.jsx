import React from "react";
import './Trip.css';

import TravelCard from "./TravelCard";

import t1 from '../../assets/8.jpg';
import t2 from '../../assets/9.jpg';
import t3 from '../../assets/10.jpg';

function Trip() {
    return (
        <>
            <div className="trip-section">
                <div className="t-intro">
                    <h2 className="t-title">Recent Trips</h2>
                    <p>You can discover new destinations for your journey from Google Maps</p>
                </div>

                <div className="trips">

                    <TravelCard 
                        image={t1}
                        title="Petra, Jordan"
                        description="Explore the ancient city carved into rose-red stone cliffs. Petra is a UNESCO World Heritage Site and one of the New Seven Wonders of the World, offering a mix of history and mystery."
                    />

                    <TravelCard 
                        image={t2}
                        title="Queenstown, New Zealand"
                        description="Known as the adventure capital of the world, Queenstown offers bungee jumping, jet boating, and stunning alpine views. A perfect blend of thrill and scenic beauty."
                    />

                    <TravelCard 
                        image={t3}
                        title="Cinque Terre, Italy"
                        description="A colorful collection of five cliffside villages along the Italian Riviera. Enjoy hiking trails, fresh seafood, and charming Mediterranean architecture."
                    />

                </div>
            </div>
        </>
    );
}

export default Trip;
