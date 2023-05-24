import React, { lazy } from 'react'
import { HireResourcesHeroData } from '../../Immutable/HireResourcesHero/HireResourcesHeroData';

const HireResourcesHero = lazy(() => import('../../Components/HireResources/Hero/HireResourcesHero'));
const Proficient = lazy(() => import('../../Components/HireResources/Proficient/Proficient'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const Transcend = lazy(() => import('../../Components/HireResources/Transcend/Transcend'));
const Developers = lazy(() => import('../../Components/HireResources/Developers/Developers'));
const OurHiring = lazy(() => import('../../Components/HireResources/OurHiring/OurHiring'));
const Programmers = lazy(() => import('../../Components/HireResources/Programmers/Programmers'));
const Flexibility = lazy(() => import('../../Components/HireResources/Flexibility/Flexibility'));
const Inspiration = lazy(() => import('../../Components/Comman/Inspiration/Inspiration'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));

export default function hire_software() {
  return (
    <div className='hire_software_page'>
        <HireResourcesHero data={HireResourcesHeroData} />
        <OurHiring />
        <Proficient />
        <OurWorks />
        <Transcend />
        <Developers />
        <Programmers />
        <Flexibility />
        <Inspiration />
        <Listening />
    </div>
  )
}


