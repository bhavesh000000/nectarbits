import React from 'react'

import './AgileDevelopment.css'
import { AgileDevelopmentData } from '../../../Immutable/MobileDevelopment/MobileDevelopment'

export default function AgileDevelopment() {
  return (
    <div class="agile_development_wrapper">
    <div class="container ">
        <div class="agile_development_wrap">
            <div class="agile_development_title">
                <h2>From Lean Design Sprints To Agile Development</h2>
            </div>
            <div class="agile_development_block">
                <ul>

                    {
                        AgileDevelopmentData?.map( (Agile, index) =>(
                            <li key={index}>
                                <div class="agile_development_sec">
                                    <div class="agile_development_img">
                                        <img src={Agile?.data?.development_img} alt="" />
                                        <div class="agile_development_img_block">
                                            <img src={Agile?.data?.icon} alt="" />
                                            <h3>{Agile?.data?.title}</h3>
                                        </div>
                                    </div>
                                    <p>{Agile?.data?.conte}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
