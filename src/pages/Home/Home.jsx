import React from 'react';

import Banner from '../../Components/Home/Hero/Banner';
import Performance from '../../Components/Home/Performance/Performance';
import OurServices from '../../Components/Home/OurServices/OurServices';
import OurClients from '../../Components/Home/OurClients/OurClients';
import Technology from '../../Components/Home/Technology/Technology';
import OurProcess from '../../Components/Home/OurProcess/OurProcess';
import OurWork from '../../Components/Home/OurWork/OurWork';
import WhyChooseUs from '../../Components/Home/WhyChooseUs/WhyChooseUs';
import Awards from '../../Components/Home/Awards/Awards';
import Idea from '../../Components/Home/Idea/Idea';
import Industries from '../../Components/Home/Industries/Industries';
import OurWorks from '../../Components/Comman/OurWorks/OurWorks';
import YourProject from '../../Components/Home/YourProject/YourProject';
import Inspiration from '../../Components/Comman/Inspiration/Inspiration';
import Listening from '../../Components/Comman/Listening/Listening';

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
