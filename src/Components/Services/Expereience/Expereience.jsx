import React from 'react'

import './Expereience.css'

import link_arrow from '../../../Assets/Images/Services/link_arrow.webp'

import Illustration_experience from '../../../Assets/Images/Services/Illustration_experience.webp'
import illustration_team_culture from '../../../Assets/Images/Services/illustration_team_culture.webp'
import illustration_cost_effective from '../../../Assets/Images/Services/illustration_cost_effective.webp'

export default function Expereience() {
  return (
    <>
        <div className="expereience_wrapper">
        <div className="container">
            <div className="expereience_wrap">
                <div className="expereience_block">
                    <div className="expereience_sec">
                        <div className="expereience_conte">
                            <h2>Expereience</h2>
                            <p>Experience Is Necessary To Get Things Done Without Mistakes Or Sooner. We Have The Extensive Experience Of Creating The Successful Software Product.</p>
                            <div className="expereience_link">
                                <a href="#0">See More About 
                                    <span><img src={link_arrow} alt="" /> </span>
                                 </a>
                            </div>
                        </div>
                    </div>
                    <div className="expereience_img">
                        <div className="expereience_img_block">
                            <img src={Illustration_experience} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="expereience_wrapper culture_wrapper">
        <div className="container">
            <div className="expereience_wrap">
                <div className="expereience_block">
                    <div className="expereience_img">
                        <div className="expereience_img_block">
                            <img src={illustration_team_culture} alt="" />
                        </div>
                    </div>
                    <div className="expereience_sec">
                        <div className="expereience_conte">
                            <h2>Team And Culture</h2>
                            <p>We Only Recruit Elite Software Engineers And Designers.We Only Recruit Elite Software Engineers And Designers. We Try Our Best To Keep Our Culture Fresh, Innovative, And Energetic.</p>
                            <div className="expereience_link">
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

    <div className="expereience_wrapper effective_wrapper">
        <div className="container">
            <div className="expereience_wrap">
                <div className="expereience_block">
                    <div className="expereience_sec">
                        <div className="expereience_conte">
                            <h2>Cost Effective</h2>
                            <p>Our Development Center Is In India Which Helps Us To Keep Our Cost Structures Reasonable. We Hire The Pool Of Elite Software Engineers To Provide Excellent Quality.</p>
                            <div className="expereience_link">
                                <a href="#0">See More About 
                                    <span><img src={link_arrow} alt="" /></span>
                                 </a>
                            </div>
                        </div>
                    </div>
                    <div className="expereience_img">
                        <div className="expereience_img_block">
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
