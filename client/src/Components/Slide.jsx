import React from 'react';
import './../Styles/Slide.css'

const Slide = ({ slide }) => {

  return (
    <li>
      <div className='slide'>
        <div className="slide-name">
          <h4>{slide.title}</h4>
          <hr />
        </div>
        <div className="slide-desc">
          {slide.details.map((detail, index) => (
            <div className="slide-1" key={index}>
              <p>{detail.description}</p>
              <hr />
              <p className='slide-frequency'>{detail.frequency}</p>
            </div>
          ))}
        </div>
        <div className="slide-price">
        <hr />
          <p>{slide.price} P.</p>
        </div>
      </div>
    </li>
  );
};

export default Slide;
