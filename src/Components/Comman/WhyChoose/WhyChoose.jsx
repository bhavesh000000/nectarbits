import React from 'react'

import './WhyChoose.css'
import { WhyChooseData } from '../../../Immutable/MobileDevelopment/MobileDevelopment'

export default function WhyChoose({data}) {
  return (
    <div className="industries_wrapper">
        <div className="container">
            <div className="industries_wrap">
                <div className="industries_block">
                    {
                        <>
                            <div className="industries_sec">
                                <div className="industries_conte">
                                    <h2>{data?.mainTitle}</h2>
                                    <p>{data?.subConte}</p>
                                </div>
                            </div>
                            <div className="industries_img">
                                <div className="industries_img_bg">
                                    <div className="industries_img_block">
                                        <ul>

                                            {
                                                data?.conte?.map( (whychoose, index) =>(
                                                    <li key={index}>
                                                        <a href="#0" className="industries_img_sec">
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
