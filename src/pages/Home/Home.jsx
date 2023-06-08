import React, { lazy, useEffect } from 'react';

const Banner = lazy(() => import('../../Components/Home/Hero/Banner'));
const Comprehensive = lazy(() => import('../../Components/Home/Comprehensive/Comprehensive'));
const Workforce = lazy(() => import('../../Components/Home/Workforce/Workforce'));
const Performance = lazy(() => import('../../Components/Home/Performance/Performance'));
const OurSolution = lazy(() => import('../../Components/Home/OurSolution/OurSolution'));
const Management = lazy(() => import('../../Components/Home/Management/Management'));
const Offering = lazy(() => import('../../Components/Comman/Offering/Offering'));


const OurClients = lazy(() => import('../../Components/Home/OurClients/OurClients'));
const Technology = lazy(() => import('../../Components/Home/Technology/Technology'));
const OurProcess = lazy(() => import('../../Components/Home/OurProcess/OurProcess'));
const OurWork = lazy(() => import('../../Components/Home/OurWork/OurWork'));
const Compliant = lazy(() => import('../../Components/Home/Compliant/Compliant'));
const Awards = lazy(() => import('../../Components/Home/Awards/Awards'));
const Idea = lazy(() => import('../../Components/Home/Idea/Idea'));
const Industries = lazy(() => import('../../Components/Home/Industries/Industries'));
const OurWorks = lazy(() => import('../../Components/Comman/OurWorks/OurWorks'));
const YourProject = lazy(() => import('../../Components/Home/YourProject/YourProject'));
const Inspiration = lazy(() => import('../../Components/Comman/Inspiration/Inspiration'));
const Listening = lazy(() => import('../../Components/Comman/Listening/Listening'));

export default function Home() {

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
    <div className='home_page'>
      <Banner />
      <Comprehensive />
      <Workforce />
      <OurSolution />
      <Management />
      <Offering />
      <Performance />
      {/* <OurClients /> */}
      <Technology />
      <OurProcess />
      <OurWork />
      <Compliant />
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
