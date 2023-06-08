import React, { lazy, useEffect } from 'react'

const Banner = lazy(() => import('../../Components/FuleAppSolution/Hero/Banner'));
const WhyUs = lazy(() => import('../../Components/FuleAppSolution/WhyUs/WhyUs'));
const AppModels = lazy(() => import('../../Components/FuleAppSolution/AppModels/AppModels'));
const Difference = lazy(() => import('../../Components/FuleAppSolution/Difference/Difference'));
const SolutionWork = lazy(() => import('../../Components/FuleAppSolution/SolutionWork/SolutionWork'));
const DreamCome = lazy(() => import('../../Components/FuleAppSolution/DreamCome/DreamCome'));
const Anywhere = lazy(() => import('../../Components/FuleAppSolution/Anywhere/Anywhere'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const LookingServices = lazy(() => import('../../Components/Comman/LookingServices/LookingServices'));
const Offering = lazy(() => import('../../Components/Comman/Offering/Offering'));
const Inspiration = lazy(() => import('../../Components/Comman/Inspiration/Inspiration'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));

export default function FuleAppSolution() {

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
    <div className='fule_solution'>
        <Banner />
        <WhyUs />
        <AppModels />
        <Difference />
        <SolutionWork />
        <DreamCome />
        <Anywhere />
        <OurWorks />
        <LookingServices />
        <Offering />
        <Inspiration />
        <Listening />
    </div>
  )
}
