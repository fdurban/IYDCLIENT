import React from 'react'
import { Col } from 'react-bootstrap'
import "./HomeCard.css"

const HomeCard = ({ title, subtitle, image }) => {
  return (
    <div className="homecard-gridcontainer">
      <div className='flextextimage'>
        <h5 className='homercard-title'>{title}</h5>
        {image && <img className="profileimage" src={image}></img>}
      </div>
      <p className='subtitle'>{subtitle}</p>
    </div>
  )
}

export default HomeCard