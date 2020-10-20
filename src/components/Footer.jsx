
import React from 'react';
import { Link } from 'react-router-dom';
import addImg from '../images/add-stack.png';
import home from '../images/home.png';
import trackIt from '../images/track-it.png';
import progress from '../images/progress.png';

const Footer = () => (

  <footer className="footer mt-auto w-100 button-footer d-flex align-items-center">
    <Link
      to="/activities"
      className="btn btn-lg w-25 h-100 d-flex flex-column align-items-center py-1 px-0 justify-content-between footer-btn"
      role="button"
    >
        <img className="footer-img" src={home} alt="add-stack" />
      <p className="mb-0">Home</p>
    </Link>
    <Link
      to="/create-activity"
      className="btn btn-lg w-25 h-100 d-flex flex-column align-items-center py-1 px-0 justify-content-between footer-btn"
      role="button"
    >
        <img className="footer-img" src={addImg} alt="add-stack" />
      
      <p className="mb-0">Create Activity</p>
    </Link>
    <Link
      to="/information"
      className="btn btn-lg w-25 h-100 d-flex flex-column align-items-center py-1 px-0 justify-content-between footer-btn"
      role="button"
    >
      <img className="footer-img" src={progress} alt="add-stack" />
      <p className="mb-0">Information</p>
    </Link>
    <Link
      to="/activities"
      className="btn btn-lg w-25 h-100 d-flex flex-column align-items-center py-1 px-0 justify-content-between footer-btn"
      role="button"
    >
        <img className="footer-img" src={trackIt} alt="add-stack" />
      <p className="mb-0">More</p>
    </Link>
  </footer>
  
);

export default Footer;