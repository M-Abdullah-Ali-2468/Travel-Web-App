import React from 'react';

import './Contact.css'
import contacts from '../../assets/contacts.jpeg'
const Contact = () => {
    return (
<div className="contact">
    <div className="c-intro">
        <h2 className="c-title">
             Contact Us
        </h2>
        <img src={contacts} alt="" className="c-img" />

    </div>
    <div className="titled-msg">
        <h1>Contact Us By Sending A Message!</h1>
    </div>
    <div className="contactForm">

        <form className="form">
    <div>
        <input type="text" id="name" name="name" required placeholder="Enter your name" />
    </div>
    <div>
        <input type="email" id="email" name="email" required placeholder="Enter your email" />
    </div>
    <div>
        <input type="text" id="subject" name="subject" required placeholder="Enter subject" />
    </div>
    <div>
        <textarea id="message" name="message" rows="4" required placeholder="Enter your message"></textarea>
    </div>
    <button type="submit">Send Message</button>
</form>

    </div>
</div>
    );
};

export default Contact;