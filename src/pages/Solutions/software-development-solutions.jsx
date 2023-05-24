import React, { lazy } from 'react'

const Hero = lazy(() => import('../../Components/Solutions/Hero/hero'));
const BusinessSolution = lazy(() => import('../../Components/Solutions/BusinessSolution/BusinessSolution'));
const Satisfaction = lazy(() => import('../../Components/Solutions/Satisfaction/Satisfaction'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const YourProject = lazy(() => import('../../Components/Comman/YourProject/YourProject'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));

export default function Solutions() {
  return (
    <div className='solutions_page'>
        <Hero />
        <BusinessSolution />
        <Satisfaction />
        <OurWorks />
        <YourProject />
        <Listening />
    </div>
  )
}
