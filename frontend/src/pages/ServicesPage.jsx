import React from 'react'
import Heading from '../components/Heading'
import servicesBg from '../assets/services-bg.png';
import Header from '../components/homepage/heroSection/Header';
import Body from '../components/Body';
import Footer from '../components/layouts/Footer';
import ServicesContent from '../components/services/ServicesContent';
const ContactPage = () => {
  return (
    <div>
      <Heading
        bgImg={servicesBg}
        title="SERVICES"
        subtitle="Comprehensive Web Development Services to Build, Enhance, and Transform Your Online Presence" 
        />
        <ServicesContent />
      {/* <Body>
        <ServicesContent />
      </Body> */}
      {/* <Footer /> */}
    </div>
  )
}

export default ContactPage