import React from 'react'
import Heading from '../components/Heading'
import contactBg from '../assets/contact-bg.jpg';
import Header from '../components/homepage/heroSection/Header';
import Body from '../components/Body';
import { contacts } from '../components/layouts/Footer';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const ContactPage = () => {
  return (
    <div>
      <Heading
        bgImg={contactBg}
        title="Contact Us"
        subtitle="Comprehensive Web Development Services to Build, Enhance, and Transform Your Online Presence" 
        />
      <Body className='flex flex-col gap-12'>
        <h1 className='uppercase text-4xl font-bold bg-gradient-to-r from-sky-500 via-sky-300 via-60% to-sky-500 w-max bg-clip-text text-transparent'>Let's Contact</h1>
        <div className='px-8'>
          <div className='bg-primary bg-opacity-10 p-12 rounded-xl'>
            <div className='w-full max-w-96 p-6 text-white bg-primary-10 flex flex-col gap-44 rounded-xl'>
              <div id='contacts-banner-heading' className='flex flex-col gap-20'>
                <div>
                  <h3 className='text-xl'>Contact Information</h3>
                  <p className='text-neutral-400 text-sm mt-2'>Say something to start a live chat!</p>
                </div>
                <div id='contacts-banner-info' className='flex flex-col gap-8'>
                {contacts.map((contact)=>(
                  <div key={contact.text} className='flex items-center text-lg gap-2'>
                    <contact.icon size={25} />
                    <p className=''>{contact.text}</p>
                  </div>
                ))}
                </div>
              </div>
              <div id='contacts-banner-icons' className='flex gap-4'>
                <a className='p-2 rounded-full bg-accent-70 hover:bg-primary transition-colors' href=""><FaFacebook size={20}/></a>
                <a className='p-2 rounded-full bg-accent-70 hover:bg-primary transition-colors' href=""><FaLinkedinIn size={20}/></a>
                <a className='p-2 rounded-full bg-accent-70 hover:bg-primary transition-colors' href=""><FaGithub size={20}/></a>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </div>
  )
}

export default ContactPage