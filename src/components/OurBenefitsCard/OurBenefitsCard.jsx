import './OurBenefitsCard.css'

const OurBenefitsCard = (props) => {
  const {img,title,desc} = props;
  return (
    <div className='ourBenefitsCard'>
      <div className="iconConainer">
        <div className="ourBenefitsIcon">
          <img src={img} alt="" />
        </div>
      </div>
      <h3 className="cardHeading">
        {title}
      </h3>
      <p className="cardDescription">
        {desc}
      </p>
    </div>
  )
}

export default OurBenefitsCard
// <HiLifebuoy />
// import { HiLifebuoy } from "react-icons/hi2";
