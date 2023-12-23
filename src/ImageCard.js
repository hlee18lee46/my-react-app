import React from 'react';
import './ImageCard.css'; // Importing CSS for styling

function ImageCard({ imageUrl, linkUrl, linkText, bottomImageUrl1, bottomImageUrl2, imgUrl1, imgUrl2 }) {
    return (
      <div className="card">
        <img src={imageUrl} alt="Card" className="card-image"/>
        <div className="card-content">
          <a href={linkUrl} className="card-link">{linkText}</a>
        </div>
        <div className="card-bottom-images">
        <a href={imgUrl1} target="_blank" rel="noopener noreferrer">
          <img src={bottomImageUrl1} alt="Bottom Image 1" className="card-bottom-image"/>
          </a>
          <a href={imgUrl2} target="_blank" rel="noopener noreferrer">
          <img src={bottomImageUrl2} alt="Bottom Image 2" className="card-bottom-image"/>
          </a>
        </div>
      </div>
    );
  }

export default ImageCard;
