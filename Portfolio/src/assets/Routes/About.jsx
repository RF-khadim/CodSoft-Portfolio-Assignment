import React from 'react'
import Hero2 from '../Components/Hero2'
import Footer from '../Components/Footer';
import AboutContainer from '../Components/AboutContainer';
const About = () => {
  return (
    <div>
      <Hero2 heading="About Me" text="Im a Frontend developer, I have worked on some beginners friendly Projects. Im passionate about creating user interface,experiences and having a basic understanding of of usability and accessibility standards." />
      <AboutContainer />
      <Footer />
    </div>

  )
}

export default About