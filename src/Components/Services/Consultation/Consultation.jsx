import React from 'react'

import './Consultation.css'

import consultation_img1 from '../../../Assets/Images/Services/consultation_img1.webp'
import consultation_img2 from '../../../Assets/Images/Services/consultation_img2.webp'
import consultation_img3 from '../../../Assets/Images/Services/consultation_img3.webp'
import consultation_img4 from '../../../Assets/Images/Services/consultation_img4.webp'
import consultation_img5 from '../../../Assets/Images/Services/consultation_img5.webp'
import consultation_img6 from '../../../Assets/Images/Services/consultation_img6.webp'
import consultation_img7 from '../../../Assets/Images/Services/consultation_img7.webp'
import consultation_img8 from '../../../Assets/Images/Services/consultation_img8.webp'

export default function Consultation() {
  return (
    <div className="consultation_wrapper">
        <div className="container">
            <div className="consultation_wrap">
                <div className="consultation_title">
                    <div className="consultation_title_block">
                        <div className="consultation_title_conte">
                            <h2>Book Free 30 min Consultation</h2>
                            <p>Nowadays Business Are Growing On Rapid Speed. If You Have Idea Don’t Wait Because You Cant
                                 Control On Time. If You Lose Now You Lose In Future. If You Have Ice We Have Solution For You. 
                                We Are In Leading, Top Notch And Worlds Top Ranked Mobile App Development Companies List.</p>
                        </div>
                    </div>
                    <div className="consultation_title_btn">
                        <div className="consultation_title_btn_block">
                            <a href="#0">Request a Proposal</a>
                        </div>
                    </div>
                </div>
               <div className="consultation_block">
                   <ul> 
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img1} alt="" />
                                </div>
                                <h3>Enterprise</h3>
                            </div>
                        </li>
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img2} alt="" />
                                </div>
                                <h3>M-Learning</h3>
                            </div>
                        </li>
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img3} alt="" />
                                </div>
                                <h3>Entertainment</h3>
                            </div>
                        </li>
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img4} alt="" />
                                </div>
                                <h3>Healthcare</h3>
                            </div>
                        </li>
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img5} alt="" />
                                </div>
                                <h3>Business</h3>
                            </div>
                        </li>
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img6} alt="" />
                                </div>
                                <h3>Wearable</h3>
                            </div>
                        </li>
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img7} alt="" />
                                </div>
                                <h3>Travel</h3>
                            </div>
                        </li>
                        <li>
                            <div className="consultation_sec">
                                <div className="consultation_img">
                                    <img src={consultation_img8} alt="" />
                                </div>
                                <h3>Restaurant</h3>
                            </div>
                        </li>
                   </ul>
               </div>
            </div>
        </div>
    </div>
  )
}
