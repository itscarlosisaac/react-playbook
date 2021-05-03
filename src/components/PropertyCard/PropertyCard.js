import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBed, faBuilding, faBath, faVectorSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Tools } from '../../utils/tools';


export const PropertyCard = (props) => {
  
  const {
    thumbnail,
    price,
    address,
    timestamp,
    details,
   } = props;

   const {rooms, bath, sqft, type } = details;
   const iconColor = "#c1c9da";


  return (
    <div className="app__property__card">
      <figure className="app__property__card--image"> 
        <div className="app__property__card--fav">
          <FontAwesomeIcon icon={faHeart} size="1x" color="#ffffff" />
        </div>
        <div className="app__property__card--date">Posted 7 hours ago</div>
        <div className="app__property__card--thumbnail" style={{backgroundImage: `url(${thumbnail})`}}></div>
      </figure>
      <article className="app__property__card--content">
        <h3>{Tools.toPrice(price)}</h3>
        <header className="app__property__card--details">
          <p>
            <FontAwesomeIcon icon={faBed} color={iconColor} size="lg"/> 
            {rooms} beds
          </p>
          <p> 
            <FontAwesomeIcon icon={faBath} color={iconColor} size="lg"/> 
            {bath} baths
          </p>
          <p> 
            <FontAwesomeIcon icon={faVectorSquare} color={iconColor} size="lg"/>
            {sqft} sft
          </p>
          <p> 
            <FontAwesomeIcon icon={faBuilding} color={iconColor} size="lg" />
            {type}
          </p>
        </header>
        <footer className="app__property__card--footer">
          <p>
            <FontAwesomeIcon icon={faAddressBook} color={iconColor} size="lg"/> 
            {address}
          </p>
        </footer>
      </article>
    </div>
  )
}

PropertyCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  details: PropTypes.shape({
    rooms: PropTypes.number,
    bath: PropTypes.number,
    sqft: PropTypes.number,
    type: PropTypes.string
  })
}