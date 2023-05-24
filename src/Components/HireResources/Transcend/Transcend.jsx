import React from 'react'

import './Transcend.css'
import { TranscendData } from '../../../Immutable/HireResourcesHero/HireResourcesHeroData'

export default function Transcend() {
  return (
    <div className='transcend_wrapper'>
        <div className='container'>
            <div className='transcend_wrap'>
                <div className='transcend_title'>
                    <h4>Why Choose Us</h4>
                    <h2>Transcend Your Business With Us</h2>
                    <p>While Adhering To Standard Development Practices And Following Agile Development Methodology, We Ensure The Website Surpasses Your Expectations.</p>
                </div>
                <div className='transcend_block'>
                    <ul>
                        {TranscendData.data.map((item, index) => (
                            <li>
                                <div key={index} className='transcend_box'>
                                    <h3>{item.title}</h3>
                                    <p>{item.conte}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
