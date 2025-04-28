import React from 'react'
import './NavigateCard.css'
import { FaArrowRight } from "react-icons/fa6";

const NavigateCard = ({title,desc}) => {
  return (
    <div className='NavigateCard'>
        <div className="navigateCardTop">
            <div className="cardHeading">
                <h3 className='cardTitle'>{title}</h3>
                <img src="/assets/images/navigateTitleShape.png"/>
            </div>
            <p className="navigateCardDesc">
                {desc}
            </p>
        </div>
        <button className='learnMoreBtn'>
            Learn More <FaArrowRight />
        </button>
    </div>
  )
}

export default NavigateCard
