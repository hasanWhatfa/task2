import Carousel from '../Carousel/Carousel'
import TitleComponent from '../TitleComponent/TitleComponent'
import './OurTestimonials.css'
const OurTestimonials = () => {
  return (
    <section className='OurTestimonials'>
      <TitleComponent qauote='Their Happy Words 🤗' sectionTitle="Our Testimonials" dscr="Our testimonials are heartfelt reflections of the nurturing environment we provide,
       where children flourish both academically and emotionally."/>
       <Carousel />
    </section>
  )
}

export default OurTestimonials
