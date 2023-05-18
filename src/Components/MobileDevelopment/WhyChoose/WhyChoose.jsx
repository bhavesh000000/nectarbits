import React from 'react'

import './WhyChoose.css'
import { WhyChooseData } from '../../../Immutable/MobileDevelopment/MobileDevelopment'

export default function WhyChoose() {
  return (
    <div class="industries_wrapper">
        <div class="container">
            <div class="industries_wrap">
                <div class="industries_block">
                    <div class="industries_sec">
                        <div class="industries_conte">
                            <h2>Why Choose Our Mobile App Development Services</h2>
                            <p> Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et nulla molestiae? Quo magni nihil eos obcaecati nihil id v</p>
                        </div>
                    </div>
                    <div class="industries_img">
                        <div class="industries_img_bg">
                            <div class="industries_img_block">
                                <ul>

                                    {
                                        WhyChooseData?.map( (whychoose, index) =>(
                                            <li key={index}>
                                                <a href="#0" class="industries_img_sec">
                                                    <img src={whychoose?.data?.images} alt=""/>
                                                    <p>{whychoose?.data?.title}</p>
                                                </a>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
