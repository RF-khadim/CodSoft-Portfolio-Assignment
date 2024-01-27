import React from 'react'
import Hero from '../Components/Hero';
import useWindowResize from '../CustomHooks/WindowResize'
import ComputerNavbar from '../Components/ComputerNavbar';
import MobileNavbar from '../Components/MobileNavbar';
import Footer from '../Components/Footer';

const Home = () => {
  const { width } = useWindowResize();
  return (
    <>
      <div>
        {width > 768 ? <ComputerNavbar /> : <MobileNavbar />}
        <Hero />
      </div>
      <Footer />
    </>
  )
}

export default Home