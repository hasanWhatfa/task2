import React from 'react'
import './FooterLinks.css'
const FooterLinks = ({title,links}) => {
  return (
    <div className="FooterLinksContainer">
        <h4>{title}</h4>
        <div className="Links">
            {links?.map(
                (link,linkIndex)=>{
                    return(
                        <a href="#" key={linkIndex}>{link}</a>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default FooterLinks
