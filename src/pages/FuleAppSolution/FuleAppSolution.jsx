import React from 'react'
import Banner from '../../Components/FuleAppSolution/Hero/Banner';
import WhyUs from '../../Components/FuleAppSolution/WhyUs/WhyUs';
import AppModels from '../../Components/FuleAppSolution/AppModels/AppModels';
import Difference from '../../Components/FuleAppSolution/Difference/Difference';
import SolutionWork from '../../Components/FuleAppSolution/SolutionWork/SolutionWork';
import DreamCome from '../../Components/FuleAppSolution/DreamCome/DreamCome';
import Anywhere from '../../Components/FuleAppSolution/Anywhere/Anywhere';
import OurWorks from '../../Components/Comman/OurWorks/OurWorks';
import LookingServices from '../../Components/Comman/LookingServices/LookingServices';
import Offering from '../../Components/Comman/Offering/Offering';
import Inspiration from '../../Components/Comman/Inspiration/Inspiration';
import Listening from '../../Components/Comman/Listening/Listening';

export default function FuleAppSolution() {
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
