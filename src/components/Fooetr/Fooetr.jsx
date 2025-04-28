import ContactLInk from '../ContactLInk/ContactLInk'
import FooterLinks from '../FooterLinks/FooterLinks'
import {contactLinkData,footerLinksData} from '../../data/footerData'
import './Fooetr.css'
import { useEffect } from 'react'
const Fooetr = () => {
  return (
    <footer className='mainFooterContainer'>
      <div className="footerContent">
        <div className="topContentFooter">
          <div className="logoAndContacts">
              <div className="logoContainerFooter">
                <div className="logoF">
                  <img src="/assets/icons/logoFooter.svg" alt="logo" />
                  <h2>Little Learners</h2>
                </div>
                <p className="footerDesc">
                  We believe in the power of play to foster creativity, problem-solving skills, and imagination.
                </p>
              </div>
              <div className="contactsLinks">
                  {contactLinkData.map(
                    (item,index)=>{
                      return(
                        <ContactLInk key={index} img={item.img} contact={item.contact}/>
                      )
                    }
                  )}
              </div>
          </div>
          <div className="linksMainContainer">
            {footerLinksData.map((item,index)=>{
              return(
                <FooterLinks key={index} title={item.titel} links={item.links}/>
              )
            })}
          </div>
        </div>



        <div className="bottomContentFooter">
            <div className="line"></div>
            <div className="privacyThings">
              <div className="leftSideP">
                <p>Terms of Service</p>
                <span className='lineV'></span>
                <p>Privacy Policy</p>
                <span className='lineV'></span>
                <p>Cookie Policy</p>
              </div>
                <div className="socialMediaLinks">
                  <img src="/assets/icons/facebook.svg" />
                  <img src="/assets/icons/twitter.svg" />
                  <img src="/assets/icons/linkeden.svg" />
                </div>
            </div>
            <div className="line"></div>
            <p className='lastElement'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Fooetr
