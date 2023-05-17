import React from 'react'
import Hero from '../../Components/Services/Hero/Hero'
import Comprehensive from '../../Components/Services/Comprehensive/Comprehensive'
import WhyChooseUs from '../../Components/Services/WhyChooseUs/WhyChooseUs'
import OurTeam from '../../Components/Services/OurTeam/OurTeam'
import CoreServices from '../../Components/Services/CoreServices/CoreServices'
import Expereience from '../../Components/Services/Expereience/Expereience'
import OurWorks from '../../Components/Comman/OurWorks/OurWorks'
import Consultation from '../../Components/Services/Consultation/Consultation'
import Inspiration from '../../Components/Comman/Inspiration/Inspiration'
import Listening from '../../Components/Comman/Listening/Listening'
import Offering from '../../Components/Comman/Offering/Offering'
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
