import React from 'react'

import './Workforce.css'
import { WorkforceData } from '../../../Immutable/Home/homeData'

export default function Workforce() {
  return (
    <div className='workforce_wrapper'>
        <div className='container'>
            <div className='workforce_wrap'>
                <div className='workforce_title'>
                    <h3>Agile Development with Creative Workforce</h3>
                    <p>You Can Hire IOS Developers On A Monthly, Part-Time, Hourly, <br /> Or Fixed-Cost Basis.</p>
                </div>
                <div className='workforce_block'>
                    <ul>
                    {
                        WorkforceData.map( (workforce, index) => (
                            <li key={index}>
                                <div className='workforce_sec'>
                                    <div className='workforce_box'>
                                       <div className='workforce_icon'>
                                            <img src={workforce?.ap_icon} />
                                       </div>
                                       <h3>{workforce?.title}</h3>
                                       <p>{workforce?.conte}</p>
                                       <div className='workforce_box_item'>
                                            {
                                                workforce?.item?.map( (item) => (
                                                    <p> <span><img src={item?.icon}/></span> {item?.title} </p>
                                                ) )
                                            }
                                       </div>
                                       <div className='workforce_btn'>
                                            <a href='#0'>{workforce?.link}</a>
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
