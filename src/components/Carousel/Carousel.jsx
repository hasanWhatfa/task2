import React, { useState } from 'react'
import './Carousel.css'
import CarouselCard from '../CarouselCard/CarouselCard'
import {carouselCardsData} from '../../data/carouselCardsData'
const Carousel = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const  handleNext = ()=> {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === carouselCardsData.length - 1) {
            return 0; 
          } else {
            return prevIndex + 1;
          }
        });
      }
      function handlePrev() {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === 0) {
            return carouselCardsData.length - 1;    
          } else {
            return prevIndex - 1; 
          }
        });
      }
  return (
    <div className='CarouselContainer'>
        <button className='preBtn' onClick={handlePrev}>
            <img src="/assets/icons/arrowLeft.svg"/>
        </button>
        <div className="caroselCardContainer">
            {Array.from({ length: 3 }).map((_, idx) => {
                const realIndex = (currentIndex + idx) % carouselCardsData.length;
                const item = carouselCardsData[realIndex];
                return (
                    <CarouselCard 
                        key={realIndex}
                        img={item.img}
                        name={item.name}
                        comment={item.comment}
                    />
                        );
                 })}
        </div>
        <button className='nextBtn' onClick={handleNext}>
            <img src="/assets/icons/arrowRight.svg"/>
        </button>
    </div>
  )
}

export default Carousel
