import React from 'react'
import Heading from '../components/Heading'
import contactBg from '../assets/contact-bg.jpg';
import Header from '../components/homepage/heroSection/Header';
import Body from '../components/Body';
const ContactPage = () => {
  return (
    <div>
      <Heading
        bgImg={contactBg}
        title="Contact Us"
        subtitle="Comprehensive Web Development Services to Build, Enhance, and Transform Your Online Presence" 
        />
      <Body>

      </Body>
    </div>
  )
}

export default ContactPage