import React from 'react'

import './Compliant.css'

import choose_us_bg1 from '../../../Assets/Images/choose_us_bg1.webp';
import choose_us_bg2 from '../../../Assets/Images/choose_us_bg2.webp';
import choose_us_bg3 from '../../../Assets/Images/choose_us_bg3.webp';
import choose_us_bg4 from '../../../Assets/Images/choose_us_bg4.webp';

import choose_us_ic1 from '../../../Assets/Images/choose_us_ic1.webp';
import choose_us_ic2 from '../../../Assets/Images/choose_us_ic2.webp';
import choose_us_ic3 from '../../../Assets/Images/choose_us_ic3.webp';
import choose_us_ic4 from '../../../Assets/Images/choose_us_ic4.webp';

export default function Compliant() {
  return (
    <div className="choose_us_wrapper">
    <div className="container">
        <div className="choose_us_wrap">
            <div className="choose_us_title">
                <h3>What To Expect</h3>
                <h2>Compliant & Timely Delivery</h2>
                <p>Nectarbits Team Moves Ahead With A Unique Approach In Software Development That Brings Winning Outcomes.</p>
            </div>
            <div className="choose_us_block">
                <div className="choose_us_sec">
                    <div className="choose_us_conte">
                        <div className="choose_us_box">
                            <div className="choose_us_img ">
                                <img className="choose_us_bg" src={choose_us_bg1} alt="" />
                                <div className="choose_us_ic">
                                    <img src={choose_us_ic1} alt="" />
                                    <h3>Agile Delivery</h3>
                                </div>
                            </div>
                            <p>We Go Agile Way Wherein Project Sprints Are Submitted To The Client After Every Week Or Two To Ensure The Team Is On The Right Track.</p>
                        </div>
                    </div>
                    <div className="choose_us_conte">
                        <div className="choose_us_box">
                            <div className="choose_us_img">
                                <img className="choose_us_bg" src={choose_us_bg2} alt="" />
                                <div className="choose_us_ic">
                                    <img src={choose_us_ic2} alt="" />
                                    <h3>Source Code Authorization</h3>
                                </div>
                            </div>
                            <p>Post-Project Development And Launch, The Team Provides The Entire Source Code To The Client.</p>
                        </div>
                    </div>
                    <div className="choose_us_conte">
                        <div className="choose_us_box">
                            <div className="choose_us_img">
                                <img className="choose_us_bg" src={choose_us_bg3} alt="" />
                                <div className="choose_us_ic">
                                    <img src={choose_us_ic3} alt="" />
                                    <h3>Software Reengineering</h3>
                                </div>
                            </div>
                            <p>We Help Organizations With Legacy Modernization, Functionality Extension, And 3rd-Party Integrations With Regulations Compliance.</p>
                        </div>
                    </div>
                    <div className="choose_us_conte">
                        <div className="choose_us_box">
                            <div className="choose_us_img">
                                <img className="choose_us_bg" src={choose_us_bg4} alt="" />
                                <div className="choose_us_ic">
                                    <img src={choose_us_ic4} alt="" />
                                    <h3>Success Management</h3>
                                </div>
                            </div>
                            <p>Conduct User Research And Make Sure Data Is Transferred To The Development Team To Guarantee Project Success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
