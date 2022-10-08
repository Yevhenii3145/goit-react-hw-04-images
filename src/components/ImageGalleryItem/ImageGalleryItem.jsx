import React from 'react'
import PropTypes from 'prop-types';

export default function ImageGalleryItem({link,alt,onClick}) {

  return (
    <li onClick={() => onClick()} className="imageGalleryItem">
        <img className='imageGalleryItemImage' src={link} alt={alt} />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  link: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
}