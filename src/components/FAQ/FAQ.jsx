import React from 'react'
import './FAQ.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import sliceArray from '../sliceArray'
import FaqItem from '../FaqItem/FaqItem'
import { faqDATA } from '../../data/faqDATA'
const FAQ = () => {
    // slice the array, will return two arraies of 4 elements
    const cols = sliceArray(faqDATA,4);
  return (
    <section className="faq">
        <TitleComponent
         qauote='Solutions For The Doubts' 
        sectionTitle="Frequently Asked Questions" 
        dscr="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        />
        <div className="faqsContainer">
            {cols.map(
                (col,index)=>{
                    return(
                        <div className="faqsRow" key={index}>
                            {col.map((item,itemIndex)=>
                            {
                                return(
                                    <FaqItem ques={item.Q} answer={item.A} key={itemIndex}/>
                                )
                            })}
                        </div>
                    )
                }
            )}
        </div>
    </section>
  )
}

export default FAQ
