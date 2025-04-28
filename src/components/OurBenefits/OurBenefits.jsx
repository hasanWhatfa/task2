import TitleComponent from "../TitleComponent/TitleComponent"
import './OurBenefits.css'
import { ourBenefitsdata } from "../../data/ourBenefitsData"
import OurBenefitsCard from "../OurBenefitsCard/OurBenefitsCard"
import sliceArray from "../sliceArray"

const OurBenefits = () => {
  const rows = sliceArray(ourBenefitsdata, 3); 

  return (
    <section className="OurBenefits">
      <TitleComponent 
        qauote='Children Deserve Bright Future' 
        sectionTitle="Our Benefits" 
        dscr="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      
      <div className="ourBenefitsCardsContainer">
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, index) => (
              <OurBenefitsCard 
                key={index} 
                img={item.img} 
                title={item.title}  
                desc={item.desc} 
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurBenefits
