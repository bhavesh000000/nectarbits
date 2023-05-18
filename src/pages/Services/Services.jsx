import React, { lazy } from 'react'

const Hero = lazy(() => import('../../Components/Services/Hero/Hero'));
const Comprehensive = lazy(() => import('../../Components/Services/Comprehensive/Comprehensive'));
const WhyChooseUs = lazy(() => import('../../Components/Services/WhyChooseUs/WhyChooseUs'));
const OurTeam = lazy(() => import('../../Components/Services/OurTeam/OurTeam'));
const CoreServices = lazy(() => import('../../Components/Services/CoreServices/CoreServices'));
const Expereience = lazy(() => import('../../Components/Services/Expereience/Expereience'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const Consultation = lazy(() => import('../../Components/Services/Consultation/Consultation'));
const Inspiration = lazy(() => import('../../Components/Comman/Inspiration/Inspiration'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));
const Offering = lazy(() => import('../../Components/Comman/Offering/Offering'));

export default function Services() {
  return (
    <div className='services_page'>
        <Hero />
        <Comprehensive />
        <WhyChooseUs />
        <OurTeam />
        <CoreServices />
        <Expereience />
        <OurWorks />
        <Consultation />
        <Offering />
        <Inspiration />
        <Listening />
    </div>
  )
}
