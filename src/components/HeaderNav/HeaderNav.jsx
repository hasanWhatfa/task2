import { FaArrowRight } from "react-icons/fa6";
// shapes importing
// needs more css editing
import btmRight from '/assets/images/orangeBottomRight.png'
import orangeSquare from '/assets/images/orangeSquare.png'
import topLeft from '/assets/images/orangeTopLeft.png'
import orangeSquareGra from '/assets/images/orangeSquareGradient.png'
import orangeSquareGraNar from '/assets/images/orangeSquareGraNar.png'
import ballFromTop from '/assets/images/ballFromTop.png'
import ballFromBtm from '/assets/images/ballFromBtm.png'
import './HeaderNav.css'


const HeaderNav = (props) => {
    const {scrolling,sentenct} = props;
  return (
    <div className={`headerNav ${scrolling ? 'scrollingNav' : ''}`}>
        <div className="topShapesContainer shape">
            <div className="topLeftShape">
                <img src={orangeSquare}/>
                <img src={btmRight} />
            </div>
            <div className="topRightShape">{/*transform:rotatey(180deg)*/}
                <img src={orangeSquareGra}/>
                <img src={btmRight} />
            </div>
        </div>
        <div className="bottomLeftShape shape">
            <img src={topLeft}/>
            <img src={orangeSquareGraNar}/>
        </div>
        <div className="ballFromTop shape">
            <img src={ballFromTop}/>
        </div>
        <div className="ballFromBtm shape">
            <img src={ballFromBtm}/>
        </div>

        <p>{sentenct} <FaArrowRight /></p> 
        {/* make the shapes a component and pass the direction as prop */}
        <div className="topShapesContainerLeft shape">
            <div className="topLeftShape">
                <img src={orangeSquare}/>
                <img src={btmRight} />
            </div>
            <div className="topRightShape">{/*transform:rotatey(180deg)*/}
                <img src={orangeSquareGra}/>
                <img src={btmRight} />
            </div>
        </div>
        <div className="bottomLeftShapeLeft shape">
            <img src={topLeft}/>
            <img src={orangeSquareGraNar}/>
        </div>
    </div>
  )
}

export default HeaderNav
