import React from 'react'

import './OurDevelopers.css'
import { OurDevelopersData } from '../../../Immutable/MobileDevelopment/MobileDevelopment'

export default function OurDevelopers() {
  return (
    <div className="our_developers_wrapper">
        <div className="container">
            <div className="our_developers_wrap">
                <div className="our_developers_block">
                    <div className="our_developers_title">
                        <h2>Feel The Difference With Our Developers</h2>
                        <p>You Always Need A Reason To Partner With A Team That Promises Quality And Pocket-Friendly Development. 
                            That’s Why We Want You To Know- How We Are The Best Fit For Your Next React Native App Development.</p>
                    </div>
                    <div className="our_developers_img_block">
                        <ul>

                            {
                                OurDevelopersData?.map( (ourDevelopers, index) =>(
                                <li key={index}>
                                    <div className="our_developers_sec">
                                        <div className="our_developers_conte">
                                            <div className="our_developers_img">
                                                <h3>{ourDevelopers?.data?.title}</h3>
                                                <img src={ourDevelopers?.data?.images} alt="" />
                                            </div>
                                            <p>{ourDevelopers?.data?.conte}</p>
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
    </div>
  )
}
