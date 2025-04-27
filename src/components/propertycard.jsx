import React from 'react';
import './propertycard.css'; // Import the CSS file for styling



function PropertyCard({ title, price, address, bedrooms, bathrooms, size, image }) { 
  return (
    <div className="property-card">
      <img src={image} alt="Property"className="property-image" />
      <div className="property-details">
        <h2>{title}</h2>
        <p className="price">${price.toLocaleString()}</p>
        <p className="address">{address}</p>
        <ul className="info">
          <li>{bedrooms} Bedrooms</li>
          <li>{bathrooms} Bathrooms</li>
          <li>{size} m²</li>
        </ul>
        <p className="description">
          Beautiful modern apartment located in the heart of the city. Close to parks, cafes and shops!
        </p>
        <button className="contact-button">Contact Agent</button>
      </div>
    </div>
  );
}

export default PropertyCard;
