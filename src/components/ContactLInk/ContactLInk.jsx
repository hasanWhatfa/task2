import React from 'react'
import './ContactLInk.css'
const ContactLInk = ({img,contact}) => {
  return (
    <div className="contactLink">
        <div className="imgContainerContact">
            <img src={img}/>
        </div>
        <p>{contact}</p>
    </div>
  )
}

export default ContactLInk
