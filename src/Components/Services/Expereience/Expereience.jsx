import React from 'react'

import './Expereience.css'

import link_arrow from '../../../Assets/Images/Services/link_arrow.png'

import Illustration_experience from '../../../Assets/Images/Services/Illustration_experience.png'
import illustration_team_culture from '../../../Assets/Images/Services/illustration_team_culture.png'
import illustration_cost_effective from '../../../Assets/Images/Services/illustration_cost_effective.png'

export default function Expereience() {
  return (
    <>
        <div class="expereience_wrapper">
        <div class="container">
            <div class="expereience_wrap">
                <div class="expereience_block">
                    <div class="expereience_sec">
                        <div class="expereience_conte">
                            <h2>Expereience</h2>
                            <p>Experience Is Necessary To Get Things Done Without Mistakes Or Sooner. We Have The Extensive Experience Of Creating The Successful Software Product.</p>
                            <div class="expereience_link">
                                <a href="#0">See More About 
                                    <span><img src={link_arrow} alt="" /> </span>
                                 </a>
                            </div>
                        </div>
                    </div>
                    <div class="expereience_img">
                        <div class="expereience_img_block">
                            <img src={Illustration_experience} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="expereience_wrapper culture_wrapper">
        <div class="container">
            <div class="expereience_wrap">
                <div class="expereience_block">
                    <div class="expereience_img">
                        <div class="expereience_img_block">
                            <img src={illustration_team_culture} alt="" />
                        </div>
                    </div>
                    <div class="expereience_sec">
                        <div class="expereience_conte">
                            <h2>Team And Culture</h2>
                            <p>We Only Recruit Elite Software Engineers And Designers.We Only Recruit Elite Software Engineers And Designers. We Try Our Best To Keep Our Culture Fresh, Innovative, And Energetic.</p>
                            <div class="expereience_link">
                                <a href="#0">See More About 
                                    <span><img src={link_arrow} alt="" /></span>
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="expereience_wrapper effective_wrapper">
        <div class="container">
            <div class="expereience_wrap">
                <div class="expereience_block">
                    <div class="expereience_sec">
                        <div class="expereience_conte">
                            <h2>Cost Effective</h2>
                            <p>Our Development Center Is In India Which Helps Us To Keep Our Cost Structures Reasonable. We Hire The Pool Of Elite Software Engineers To Provide Excellent Quality.</p>
                            <div class="expereience_link">
                                <a href="#0">See More About 
                                    <span><img src={link_arrow} alt="" /></span>
                                 </a>
                            </div>
                        </div>
                    </div>
                    <div class="expereience_img">
                        <div class="expereience_img_block">
                            <img src={illustration_cost_effective} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
