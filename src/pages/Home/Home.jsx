import React, { lazy } from 'react';



const Banner = lazy(() => import('../../Components/Home/Hero/Banner'));
const Performance = lazy(() => import('../../Components/Home/Performance/Performance'));
const OurServices = lazy(() => import('../../Components/Home/OurServices/OurServices'));
const OurClients = lazy(() => import('../../Components/Home/OurClients/OurClients'));
const Technology = lazy(() => import('../../Components/Home/Technology/Technology'));
const OurProcess = lazy(() => import('../../Components/Home/OurProcess/OurProcess'));
const OurWork = lazy(() => import('../../Components/Home/OurWork/OurWork'));
const WhyChooseUs = lazy(() => import('../../Components/Home/WhyChooseUs/WhyChooseUs'));
const Awards = lazy(() => import('../../Components/Home/Awards/Awards'));
const Idea = lazy(() => import('../../Components/Home/Idea/Idea'));
const Industries = lazy(() => import('../../Components/Home/Industries/Industries'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const YourProject = lazy(() => import('../../Components/Home/YourProject/YourProject'));
const Inspiration = lazy(() => import('../../Components/Comman/Inspiration/Inspiration'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));

export default function Home() {
  return (
    <div className='home_page'>
      <Banner />
      <Performance />
      <OurServices />
      {/* <OurClients /> */}
      <Technology />
      <OurProcess />
      <OurWork />
      <WhyChooseUs />
      <Awards />
      <Idea />
      <Industries />
      <OurWorks />
      <YourProject />
      <Inspiration />
      <Listening />
    </div>
  )
}
