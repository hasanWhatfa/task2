import './App.css'
import ContentWrapper from './components/ContentWrapper/ContentWrapper'
import FAQ from './components/FAQ/FAQ'
import Fooetr from './components/Fooetr/Fooetr'
import HeroComponent from './components/HeroComponent/HeroComponent'
import Navbar from './components/Navbar/Navbar'
import NavigateCompo from './components/NavigateCompo/NavigateCompo'
import OurBenefits from './components/OurBenefits/OurBenefits'
import OurTestimonials from './components/OurTestimonials/OurTestimonials'

function App() {

  return (
    <>
    <Navbar links={['Home','About Us','Academics','Admissions','Student Life','Contact']} companyName='Little Learners'/>
    <ContentWrapper>
      <HeroComponent />
      <OurBenefits />
      <OurTestimonials />
      <FAQ />
      <NavigateCompo />
    </ContentWrapper>
    <Fooetr />
    </>
  )
}

export default App
// the components can be improved by making the data in a seperated file