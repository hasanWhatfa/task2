import './TitleComponent.css'
const TitleComponent = (props) => {
    const{qauote,sectionTitle,dscr} = props;
  return (
    <div className='TitleComp'>
      <p className="TitleQoute">
        {qauote}
      </p>
      <h2 className='SectionTitle'>
        {sectionTitle}
      </h2>
      <p className="TitleDesc">
        {dscr}
      </p>
    </div>
  )
}

export default TitleComponent
