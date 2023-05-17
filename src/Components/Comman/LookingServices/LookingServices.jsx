import React from 'react'

import './LookingServices.css'
import { LookingServicesData } from '../../../Immutable/CommanData/CommanData'

export default function LookingServices() {
  return (
    <div className='looking_services_wrapper'>
        <div className='container'>
            <div className='looking_services_wrap'>
                <div className='looking_services_title'>
                    <h3>Looking for other services</h3>
                </div>
                <div className='looking_services_block'>
                    <ul>

                        {
                            LookingServicesData?.map( (looking) =>  
                            <li>
                                <a href='#0' className='looking_services_conte'>
                                    <div className='looking_services_img'>
                                        <img src={looking?.images} />
                                    </div>
                                    <h3>{looking?.title}</h3>
                                </a>
                            </li>
                            )
                        }

                        
                    </ul>
                </div>
            </div> 
        </div>
    </div>
  )
}

