import React from 'react'

import './DreamCome.css'
import { DreamComeData } from '../../../Immutable/FuleAppSolution/FuleSolutionData'

export default function DreamCome() {
  return (
    <div className='dream_come_wrapper'>
        <div className='container'>
            <div className='dream_come_wrap'>
                    <div className='dream_come_title'>
                        <h2>How We Make Your Fuel Delivery App Development Solution Dream Come True?</h2>
                    </div>
                <div className='dream_come_block'>
                    <div className='dream_come_sec'>
                        <ul>
                            {   
                                DreamComeData?.map( (dream) => <li>
                                    <div key={dream} className='dream_come_item'>
                                        <h3>{dream?.data?.number}</h3>
                                        <div className='dream_come_conte'>
                                            <h4>{dream?.data?.title}</h4>
                                            <p>{dream?.data?.conte}</p>
                                        </div>
                                    </div>
                                </li> )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
