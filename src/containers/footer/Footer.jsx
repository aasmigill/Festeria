/* eslint-disable eol-last */
import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Discover the Best Festivals and Hackathons Near You with Festeria</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Join the Community now!</p>
    </div>
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <h4>Festeria</h4>
        <p>JIIT minor gp 3 <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>JIIT minor gp 3 </p>
        <p>1234556</p>
        <p>info@festeria.com</p>
      </div>
    </div>
    <div className="gpt3__footer-copyright">
      <p>@2023 Festeria. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;