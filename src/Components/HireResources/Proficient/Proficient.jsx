import React from 'react'

import './Proficient.css'
import { ProficientData } from '../../../Immutable/HireResourcesHero/HireResourcesHeroData'
import HireProtficient from './HireProtficient'

export default function Proficient() {
  return (
    <div className='proficient_wrapper'>
        <div className='proficient_wrap'>
            <div className='container'>
                <div className='proficient_block'>
                    <div className='proficient_title'>
                        <h4>What to Expect</h4>
                        <h2>Proficient iOS/iPhone Developers For Hire</h2>
                        <p>NectarBits Ensures The Best Results To Diverse Client Bases From Start-Ups To Enterprises Across The Globe Through
                         Hire's Dedicated Service To Celebrate Great Results Quickly And Efficiently.</p>
                    </div>

                    <div className='proficient_sec'>
                        {
                            ProficientData?.map( ( proficient) => (
                                <div className='proficient_conte'>
                                    <HireProtficient data={proficient} />
                                </div>
                            ) )
                        }
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
