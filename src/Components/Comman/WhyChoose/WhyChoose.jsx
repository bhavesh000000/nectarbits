import React from 'react'

import './WhyChoose.css'
import { WhyChooseData } from '../../../Immutable/MobileDevelopment/MobileDevelopment'

export default function WhyChoose({data}) {
  return (
    <div class="industries_wrapper">
        <div class="container">
            <div class="industries_wrap">
                <div class="industries_block">
                    {
                        <>
                            <div class="industries_sec">
                                <div class="industries_conte">
                                    <h2>{data?.mainTitle}</h2>
                                    <p>{data?.subConte}</p>
                                </div>
                            </div>
                            <div class="industries_img">
                                <div class="industries_img_bg">
                                    <div class="industries_img_block">
                                        <ul>

                                            {
                                                data?.conte?.map( (whychoose, index) =>(
                                                    <li key={index}>
                                                        <a href="#0" class="industries_img_sec">
                                                            <img src={whychoose?.images} alt=""/>
                                                            <p>{whychoose?.title}</p>
                                                        </a>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
