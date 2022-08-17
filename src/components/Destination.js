import React from 'react';
import classes from './Destination.module.css';
import Pin from '../assets/pinDrop.svg';

function Destination(props) {
  return (
    <>
      <div className={classes.container}>
        <img
          src={props.item.imageUrl}
          alt="travel destination"
          className={classes.cardImage}
        />
        <div className={classes.descriptionContainer}>
          <img src={Pin} alt="pin drop" />
          <span className={classes.location}>{props.item.location}</span>
          <a href={props.item.googleMapsUrl} className={classes.mapsLink}>
            View on Google Maps
          </a>
          <h2>{props.item.title}</h2>
          <p className={classes.dates}>
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className={classes.description}>{props.item.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Destination;
