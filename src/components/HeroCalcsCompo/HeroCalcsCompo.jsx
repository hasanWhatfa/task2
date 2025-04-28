import React from 'react'
import './HeroCalcsCompo.css'
const HeroCalcsCompo = (props) => {
    const {number,text} = props;
  return (
    <div className='heroCalcComponent'>
      <h3>+{number}</h3>
      <p>{text}</p>
    </div>
  )
}

export default HeroCalcsCompo
