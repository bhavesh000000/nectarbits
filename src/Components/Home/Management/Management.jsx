import React from 'react'

import './Management.css'
import { ManagementData } from '../../../Immutable/Home/homeData'

export default function Management() {
  return (
    <div className='management_wrapper'>
        <div className='container'>
            <div className='management_wrap'>
                <div className='management_title'>
                    <h3>Why Choose Us</h3>
                    <p>Nectarbits is a company that delivers customer-centric IT solutions that are result-oriented and give tangible business results because we precisely know how unique brands are made. </p>
                </div>
                <div className='management_block'>
                    <ul>
                    {
                        ManagementData.map( (management, index) => (
                            <li key={index}>
                                <div className='management_sec'>
                                    <div className='management_box'>
                                       <div className='management_icon'>
                                            <img src={management?.ap_icon} alt='icon' />
                                       </div>
                                       <h3>{management?.title}</h3>
                                       <p>{management?.conte}</p>
                                       <div className='management_box_item'>
                                        {management?.item.map((item, index) => (
                                            <p key={index}>{item}</p>
                                        ))}
                                       </div>
                                    </div>
                                </div>
                            </li>
                        ) )
                    }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
