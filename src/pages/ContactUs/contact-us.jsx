import React, { lazy } from 'react'


const Contact = lazy(() => import('../../Components/Contact/Contact/Contact'));

export default function ContactUs() {
  return (
    <div className='contact_us_page'>
        <Contact />
    </div>
  )
}
