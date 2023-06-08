import React from 'react'

import './HireResourcesHero.css'
import { NavLink } from 'react-router-dom'

export default function HireResourcesHero({data}) {
  return (
    <div className='hire_resources_hero'>
        <div className="banner_wrapper">
            <div className="banner_wrap">
                <div className="container ">
                    <div className="banner_block">
                        {
                            data?.map( (HireResources) =>
                                <div className="banner_sec">
                                    <div className="banner_conte">

                                                <div className="banner_inner_conte">
                                                    <h3>{HireResources?.data?.title} <span>{HireResources?.data?.subTitle}</span> </h3>
                                                    <p>{HireResources?.data?.conte}</p>
                                                    <div className="banner_btn">
                                                        <NavLink to="/contactus">{HireResources?.data?.link}</NavLink>
                                                    </div>    
                                                </div>

                                    </div>
                                    <div className="banner_img">
                                        <div className="banner_img_block">
                                            <img src={HireResources?.data?.images} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
