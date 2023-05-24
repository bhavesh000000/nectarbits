import React, { lazy } from 'react'

import { ReactNetiveHeroData } from '../../Immutable/ServicesHero/ServicesHero'
import { OurTechnicalData, ReactNativeData, ReactWhyChooseData } from '../../Immutable/CommanData/CommanData';
import WhyChoose from '../../Components/Comman/WhyChoose/WhyChoose';

const Hero = lazy(() => import('../../Components/Comman/ServicesHero/Hero'));
const ReactCompany = lazy(() => import('../../Components/Comman/ReactCompany/ReactCompany'));
const AgileDevelopment = lazy(() => import('../../Components/Comman/AgileDevelopment/AgileDevelopment'));
const YourProject = lazy(() => import('../../Components/Comman/YourProject/YourProject'));
const OurTechnical = lazy(() => import('../../Components/Comman/OurTechnical/OurTechnical'));

export default function ReactNative() {
  return (
    <div className='react_native_page'>
        <Hero data={ReactNetiveHeroData} />
        <ReactCompany data={ReactNativeData} />
        <AgileDevelopment />
        <YourProject />
        <OurTechnical data={OurTechnicalData} />
        <WhyChoose data={ReactWhyChooseData} />
    </div>
  )
}
