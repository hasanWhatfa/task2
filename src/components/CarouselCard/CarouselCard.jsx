import React from 'react'
import './CarouselCard.css'
const CarouselCard = ({img,name,comment}) => {
  return (
    <div className='CarouselCard'>
        <div className="carouselCardName">
            <img src={img}/>
            <h4>{name}</h4>
        </div>
        <div className="stars">
            <img src="/assets/icons/star.svg" />
            <img src="/assets/icons/star.svg" />
            <img src="/assets/icons/star.svg" />
            <img src="/assets/icons/star.svg" />
            <img src="/assets/icons/star.svg" />
        </div>
        <p className="caroDesc">
            {comment}
        </p>
    </div>
  )
}

export default CarouselCard
