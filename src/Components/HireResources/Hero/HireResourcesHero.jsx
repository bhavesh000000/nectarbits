import React from 'react'

import './HireResourcesHero.css'

export default function HireResourcesHero({data}) {
  return (
    <div className='hire_resources_hero'>
        <div class="banner_wrapper">
            <div class="banner_wrap">
                <div class="container ">
                    <div class="banner_block">
                        {
                            data?.map( (HireResources) =>
                                <div class="banner_sec">
                                    <div class="banner_conte">

                                                <div class="banner_inner_conte">
                                                    <h3>{HireResources?.data?.title} <span>{HireResources?.data?.subTitle}</span> </h3>
                                                    <p>{HireResources?.data?.conte}</p>
                                                    <div class="banner_btn">
                                                        <a href="#0">{HireResources?.data?.link}</a>
                                                    </div>    
                                                </div>

                                    </div>
                                    <div class="banner_img">
                                        <div class="banner_img_block">
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
