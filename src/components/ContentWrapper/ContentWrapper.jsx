import './ContentWrapper.css'
const ContentWrapper = (props) => {
    const {children} = props
  return (
    <main className='mainContainer'>
      {children}
    </main>
  )
}

export default ContentWrapper
