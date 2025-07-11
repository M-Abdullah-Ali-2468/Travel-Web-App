import React from 'react';
import night from '../../assets/night.jpg';
import './About.css'
const About = () => {
    return (
        <div className="abouts">
            <div className="main-title">
                <h1>About</h1>
                <img src={night} alt="Night Scenery" className="about-img" />
            </div>
            <div className="about-info">
                <div className="info-boxes">
                    <h2 className="abt-title">Our History</h2>
                    <p className="info">
                        JourneyGo was founded in 2015 by a group of travel enthusiasts who believed that travel should be more than just visiting places—it should be about discovering stories, creating lifelong memories, and embracing new cultures. What started as a simple blog to document adventures soon grew into a thriving platform visited by millions. With a strong community and a passionate team, JourneyGo has evolved into a trusted companion for travelers worldwide, offering tips, guides, and booking support. Over the years, we’ve helped thousands explore hidden gems and rediscover familiar places in new ways.
                    </p>
                </div>
                <div className="info-boxes">
                    <h2 className="abt-title">Our Vision</h2>
                    <p className="info">
                        Our vision is to create a world where travel is accessible, meaningful, and transformative for everyone. We imagine a future where every person, regardless of background, can venture beyond borders and truly connect with the beauty of the world. We believe that travel breaks barriers, promotes empathy, and fosters global understanding. Whether you're looking for adventure, peace, culture, or nature, our goal is to help you discover it in a way that feels personal and impactful. JourneyGo envisions becoming the most loved and inspiring travel companion globally—bringing the joy of exploration to your fingertips.
                    </p>
                </div>
                <div className="info-boxes">
                    <h2 className="abt-title">Our Mission</h2>
                    <p className="info">
                        At JourneyGo, our mission is to empower travelers with reliable information, beautifully curated content, and smart tools that make travel planning effortless and joyful. We’re committed to promoting sustainable tourism by highlighting eco-friendly practices, supporting local communities, and encouraging mindful exploration. Through innovation and storytelling, we aim to guide each traveler toward authentic experiences—whether it’s a solo backpacking trip through Southeast Asia, a family vacation in the Alps, or a weekend getaway nearby. Everything we do is centered around making your journey safe, unforgettable, and truly yours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
