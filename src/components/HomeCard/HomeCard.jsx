import React from 'react'
import { Col } from 'react-bootstrap'
import "./HomeCard.css"

const HomeCard = ({title, subtitle, image}) => {
  return (
          <Col xs={12} md={4} className="mb-3 mb-md-0">
              <div className="homecard-gridcontainer">
                  <h5 className='homercard-title'>{title}</h5>
                  <p>{subtitle}</p>
                  <img className="profileimage"src={image}></img>
              </div>
          </Col>
  )
}

export default HomeCard