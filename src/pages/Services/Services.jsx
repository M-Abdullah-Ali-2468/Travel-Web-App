import React from 'react';
import Trip from '../../components/TravelCard/Trip'
import s_img from '../../assets/services.jpg'

import './Services.css'
const Services = () => {
    return (
        <>
            <div className="servcie">
                <div className="service-intro">
                    <h2 className="service-title">
                        Services
                    </h2>
                    <img src={s_img} alt="" className="s-image" />
                </div>
                <Trip />
            </div>
        </>
    );
};

export default Services;