import React from 'react'
import './NavigateCompo.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import NavigateCard from '../NavigateCard/NavigateCard'
import {navigateOurPagesData} from '../../data/navigateOurPagesData'
import sliceArray from "../sliceArray"

const NavigateCompo = () => {
  const rows = sliceArray(navigateOurPagesData, 2); 
  return (
    <section className='NavigateSection'>
      <TitleComponent 
      qauote='Explore More' 
      sectionTitle="Navigate through our Pages" 
      dscr="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <div className="ourPagesCardContainer">
        {
          rows.map((row,index)=>{
            return(
              <div className="ourPagesRow" key={index}>
              {row.map(
                (item,itemIndex)=>{
                  return(
                    <NavigateCard key={itemIndex} title={item.title} desc={item.desc}/>
                  )
                }
              )}
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default NavigateCompo
// ourPagesRow