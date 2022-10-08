import React from 'react'
import PropTypes from 'prop-types';
import '../styles.css'

export default function Button({text, onClick}) {
  return (
    <button className='loadButton' onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}