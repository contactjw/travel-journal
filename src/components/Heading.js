import React from 'react';
import classes from './Heading.module.css';
import Logo from '../assets/travelLogo.svg';

function Heading() {
  return (
    <div className={classes.headingContainer}>
      <img src={Logo} alt="travel logo" className={classes.headingImage}></img>
      <p className={classes.headingText}>my travel journal.</p>
    </div>
  );
}

export default Heading;
