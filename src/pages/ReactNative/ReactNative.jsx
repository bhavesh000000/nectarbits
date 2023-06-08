import React, { lazy, useEffect } from 'react'

import { ReactNetiveHeroData } from '../../Immutable/ServicesHero/ServicesHero'
import { OurTechnicalData, ReactNativeData, ReactWhyChooseData, ReactlibrariesData } from '../../Immutable/CommanData/CommanData';
import {CmOurTechnicalData} from '../../Immutable/ReactNative/ReactNativeData';

const Hero = lazy(() => import('../../Components/Comman/ServicesHero/Hero'));
const ReactCompany = lazy(() => import('../../Components/Comman/ReactCompany/ReactCompany'));
const AgileDevelopment = lazy(() => import('../../Components/Comman/AgileDevelopment/AgileDevelopment'));
const YourProject = lazy(() => import('../../Components/Comman/YourProject/YourProject'));
const OurTechnical = lazy(() => import('../../Components/Comman/OurTechnical/OurTechnical'));
const WhyChoose = lazy(() => import('../../Components/Comman/WhyChoose/WhyChoose'));
const Libraries = lazy(() => import('../../Components/Comman/Libraries/Libraries'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const CmOurTechnical = lazy(() => import('../../Components/ReactNative/CmOurTechnical/CmOurTechnical'));
const MobileApps = lazy(() => import('../../Components/ReactNative/MobileApps/MobileApps'));
const OurDevelopers = lazy(() => import('../../Components/MobileDevelopment/OurDevelopers/OurDevelopers'));
const LookingServices = lazy(() => import('../../Components/Comman/LookingServices/LookingServices'));
const Offering = lazy(() => import('../../Components/Comman/Offering/Offering'));
const Inspiration = lazy(() => import('../../Components/Comman/Inspiration/Inspiration'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));

export default function ReactNative() {

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
    <div className='react_native_page'>
        <Hero data={ReactNetiveHeroData} />
        <ReactCompany data={ReactNativeData} />
        <AgileDevelopment />
        <YourProject />
        <OurTechnical data={OurTechnicalData} />
        <WhyChoose data={ReactWhyChooseData} />
        <Libraries data={ReactlibrariesData} />
        <OurWorks />
        <CmOurTechnical data={CmOurTechnicalData} />
        <MobileApps />
        <OurDevelopers />
        <LookingServices />
        <Offering />
        <Inspiration />
        <Listening />
    </div>
  )
}
