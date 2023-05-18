 import React, { lazy } from 'react'

const Hero = lazy(() => import('../../Components/Comman/ServicesHero/Hero'));
const AppServices = lazy(() => import('../../Components/MobileDevelopment/AppServices/AppServices'));
const AgileDevelopment = lazy(() => import('../../Components/MobileDevelopment/AgileDevelopment/AgileDevelopment'));
const YourProject = lazy(() => import('../../Components/MobileDevelopment/YourProject/YourProject'));
const WhyChoose = lazy(() => import('../../Components/MobileDevelopment/WhyChoose/WhyChoose'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const Libraries = lazy(() => import('../../Components/MobileDevelopment/Libraries/Libraries'));
const OurDevelopers = lazy(() => import('../../Components/MobileDevelopment/OurDevelopers/OurDevelopers'));
const Solutions = lazy(() => import('../../Components/MobileDevelopment/Solutions/Solutions'));
 
 export default function MobileDevelopment() {
   return (
     <div className='mobile_development_page'>
        <Hero />
        <AppServices />
        <AgileDevelopment/>
        <YourProject/>
        <WhyChoose />
        <OurWorks />
        <Libraries />
        <OurDevelopers />
        <Solutions />
     </div>
   )
 }
 