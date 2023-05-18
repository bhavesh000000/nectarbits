import React from 'react'

import './OurProcess.css';

import process_img1 from '../../../Assets/Images/process_img1.webp'
import process_img2 from '../../../Assets/Images/process_img2.webp'
import process_img3 from '../../../Assets/Images/process_img3.webp'
import process_img4 from '../../../Assets/Images/process_img4.webp'

export default function OurProcess() {
  return (
    <div className="process_wrapper">
        <div className="process_wrap">
            <div className="process_title">
                <h3>Our Process</h3>
                <p>Nectarines Follow A Unique Approach To Build A Modern, Scalable, And Secure Solution The Way You Want Them</p>
            </div>
            <div className="container">
                <div className="process_block">
                    <span className="top_circle"></span>
                    <span className="buttom_circle"></span>
                    <div className="process_left">
                        <div className="process_sec">
                            <div className="process_conte">
                                <h3>Strategy</h3>
                                <p>The Observation, Interviews, And User Research Enable Us To Fully Understand The Users And The Problem And Design A Strategic Plan For Seamless Development.</p>
                            </div>
                            <div className="process_img">
                                <img src={process_img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="process_right">
                        <div className="process_sec">
                            <div className="process_img">
                                <img src={process_img2} alt="" />
                            </div>
                            <div className="process_conte">
                                <h3>UI/UX Design</h3>
                                <p>We Bring Design Thinking Into Everything We Do From UX, Architecture, And Processes To Our Culture, People And Leadership.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process_left">
                        <div className="process_sec">
                            <div className="process_conte">
                                <h3>App Development</h3>
                                <p>Engineer Mobile And Web Applications That Help In Attracting And Retaining Userbase. The Cutting-Edge Solutions Ensure A Consistent Experience Across All Platforms And Improved ROI.</p>
                            </div>
                            <div className="process_img">
                                <img src={process_img3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="process_right">
                        <div className="process_sec">
                            <div className="process_img">
                                <img src={process_img4} alt="" />
                            </div>
                            <div className="process_conte">
                                <h3>Deployment & Support</h3>
                                <p>Going Beyond The Obvious, Our Teams Make Our Customers Succeed With Hassle-Free Deployment And Post-Development Support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
