 import React, { lazy } from 'react'

const Hero = lazy(() => import('../../Components/Comman/ServicesHero/Hero'));
 
 export default function MobileDevelopment() {
   return (
     <div className='mobile_development_page'>
        <Hero />
     </div>
   )
 }
 