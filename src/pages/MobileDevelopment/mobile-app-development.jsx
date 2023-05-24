 import React, { lazy } from 'react'
import { ServicesHeroData } from '../../Immutable/ServicesHero/ServicesHero';
import { WhyChooseData, librariesData } from '../../Immutable/CommanData/CommanData';

const Hero = lazy(() => import('../../Components/Comman/ServicesHero/Hero'));
const AppServices = lazy(() => import('../../Components/MobileDevelopment/AppServices/AppServices'));
const AgileDevelopment = lazy(() => import('../../Components/Comman/AgileDevelopment/AgileDevelopment'));
const YourProject = lazy(() => import('../../Components/Comman/YourProject/YourProject'));
const WhyChoose = lazy(() => import('../../Components/Comman/WhyChoose/WhyChoose'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));

const Libraries = lazy(() => import('../../Components/Comman/Libraries/Libraries'));

const OurDevelopers = lazy(() => import('../../Components/MobileDevelopment/OurDevelopers/OurDevelopers'));
const Solutions = lazy(() => import('../../Components/MobileDevelopment/Solutions/Solutions'));
const Technology = lazy(() => import('../../Components/MobileDevelopment/Technology/Technology'));
const LookingServices = lazy(() => import('../../Components/Comman/LookingServices/LookingServices'));
const Offering = lazy(() => import('../../Components/Comman/Offering/Offering'));
const Inspiration = lazy(() => import('../../Components/Comman/Inspiration/Inspiration'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));



 export default function MobileDevelopment() {
   return (
     <div className='mobile_development_page'>
        <Hero data ={ServicesHeroData} />
        <AppServices />
        <AgileDevelopment/>
        <YourProject/>
        <WhyChoose data={WhyChooseData} />
        <OurWorks />
        <Libraries data={librariesData} />
        <OurDevelopers />
        <Solutions />
        <Technology />
        <LookingServices />
        <Offering />
        <Inspiration /> 
        <Listening />
     </div>
   )
 }
 