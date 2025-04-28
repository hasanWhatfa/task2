import React, { useState } from 'react'
import './FaqItem.css'
const FaqItem = (props) => {
    const {ques,answer} = props;
    const [clicked , setClicked] = useState(false);
  return (

    <div className={`faqItem ${clicked ? 'faqopend' : 'faqClosed'}`}>
        <div className="quesPart">
            <h5>{ques}</h5>
            <div className={`answer ${clicked ? 'answerOpend' : 'closed'}`}>
                <span className="line"></span>
                <p>{answer}</p>
            </div>
        </div>
        <button onClick={()=>setClicked(!clicked)} className={`${clicked ? 'rotated' : ''}`}>
            <img src={`/assets/icons/${clicked ? 'minus.svg' : 'plus.svg'}`}/>
        </button>
    </div>
  )
}

export default FaqItem
