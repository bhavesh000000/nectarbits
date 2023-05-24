import React from 'react'

import './OurTeam.css'

import our_team_logo from '../../../Assets/Images/Services/our_team_logo.webp'
import our_team_img1 from '../../../Assets/Images/Services/ic_checkmark.webp'

export default function OurTeam() {
  return (
    <div className="our_team_wrapper">
        <div className="container">
            <div className="our_team_wrap">
                <div className="our_team_title">
                    <div className="our_team_title_block">
                        <div className="our_team_title_conte">
                            <h2>We Are Very Proud Of Our Team. And The Name Itself Says (Bits That Never End) NectarBits.</h2>
                            <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et nulla molestiae? Quo magni nihil eos obcaecati nihil id </p>
                        </div>
                    </div>
                    <div className="our_team_title_img">
                        <div className="our_team_title_img_block">
                            <img src={our_team_logo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="our_team_block">
                    <ul> 
                        <li>
                            <div className="our_team_sec">
                                <div className="our_team_img">
                                    <img src={our_team_img1} alt="" />
                                </div>
                                <div className="our_team_conte">
                                    <h3>Innovative Products</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="our_team_sec">
                                <div className="our_team_img">
                                    <img src={our_team_img1} alt="" />
                                </div>
                                <div className="our_team_conte">
                                    <h3>Eye-Catching User Experience</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="our_team_sec">
                                <div className="our_team_img">
                                    <img src={our_team_img1} alt="" />
                                </div>
                                <div className="our_team_conte">
                                    <h3>Agile Development And Process</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="our_team_sec">
                                <div className="our_team_img">
                                    <img src={our_team_img1} alt="" />
                                </div>
                                <div className="our_team_conte">
                                    <h3>Branding And Marketing</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="our_team_sec">
                                <div className="our_team_img">
                                    <img src={our_team_img1} alt="" />
                                </div>
                                <div className="our_team_conte">
                                    <h3>Managed Scalable  Product Development</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="our_team_sec">
                                <div className="our_team_img">
                                    <img src={our_team_img1} alt="" />
                                </div>
                                <div className="our_team_conte">
                                    <h3>Security And Compliance</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
