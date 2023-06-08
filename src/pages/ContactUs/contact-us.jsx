import React, { lazy, useEffect } from 'react'


const Contact = lazy(() => import('../../Components/Contact/Contact/Contact'));

export default function ContactUs() {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    scrollToTop();
  }, []);

  return (
    <div className='contact_us_page'>
        <Contact />
    </div>
  )
}
