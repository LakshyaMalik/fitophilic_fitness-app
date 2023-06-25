import React from 'react';
import './help.css';
export const Help = () => {
  return (
    <div className='help'>
      <div className='head'>
        Fitness App Help Desk
      </div>

      <div className="main">
        <h2>Contact Us</h2>
        <p>
         For any queries or issues related to app. Kindly fill the given form and our experts will contact you soon!
        </p>

        <label className='lb' htmlFor="name">Name:</label>
        <input className='inp' type="text" id="name" name="name" required />

        <label className='lb' htmlFor="email">Email:</label>
        <input className='inp' type="email" id="email" name="email" required />

        <label className='lb' htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Send" />
      </div>

      <p className='mat'>
        You can also email us at{' '}
        <a href="mailto:sb3404@srmist.edu.in">support@fitnessapp.com</a>.
      </p>
    </div>
  );
};
