import React from 'react'

import './Inspiration.css'

import insights_image_1 from '../../../Assets/Images/insights_image_1.png'
import insights_image_2 from '../../../Assets/Images/insights_image_2.png'
import insights_image_3 from '../../../Assets/Images/insights_image_3.png'
import insights_image_4 from '../../../Assets/Images/insights_image_4.png'

export default function Inspiration() {
  return (
    <div className="inspiration_wrapper">
        <div className="container">
            <div className="inspiration_wrap">
                <div className="inspiration_title">
                    <div className="inspiration_title_block">
                        <h3>Insights</h3>
                        <h2>Draw An Inspiration</h2>
                    </div>
                    <p>Up To Date Information Is Something We Care About. <br />
                        Visit Nectarbits Blogs To Get The Latest On Demand App Trends In Technology And Mobile Applications</p>
                </div>
                <div className="inspiration_block">
                    <ul>
                        <li>
                            <div className="inspiration_conte">
                                <div className="inspiration_img">
                                    <div className="inspiration_img_block">
                                        <img src={insights_image_1} alt="" />
                                    </div>
                                </div>
                                <div className="insights_block">
                                    <div className="insights_sec">
                                        <b>Renish</b>
                                        <div> <span>Jan 27, 2023</span> <span>5 mins read</span> </div>
                                        <h3 className="blue_h3">React Native or Flutter-Know the pros and cons of both to make a choice</h3>
                                        <p>If You Look Around You, Almost Everyone Is Using Smartphone Apps These Day…</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inspiration_conte">
                                <div className="inspiration_img">
                                    <div className="inspiration_img_block">
                                        <img src={insights_image_2} alt="" />
                                    </div>
                                </div>
                                <div className="insights_block">
                                    <div className="insights_sec">
                                        <b>Himanshu patel</b>
                                        <div> <span>Jan 27, 2023</span> <span>5 mins read</span> </div>
                                        <h3>A Close Look at the Respective Features Laravel, Node JS and ROR and how They are Useful</h3>
                                        <p>Laravel, Node JS And Ruby On Rails (ROR) Are Among The Most Well-Known…</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inspiration_conte">
                                <div className="inspiration_img">
                                    <div className="inspiration_img_block">
                                        <img src={insights_image_3} alt="" />
                                    </div>
                                </div>
                                <div className="insights_block">
                                    <div className="insights_sec">
                                        <b>Renish</b>
                                        <div> <span>Jan 27, 2023</span> <span>5 mins read</span> </div>
                                        <h3>How Much Does It Cost To Develop A Dating App Like Tinder?</h3>
                                        <p>There’s An App To Find Your Love.  Of Course, You Know The Same. The Hundreds…</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="inspiration_conte">
                                <div className="inspiration_img">
                                    <div className="inspiration_img_block">
                                        <img src={insights_image_4} alt="" />
                                    </div>
                                </div>
                                <div className="insights_block">
                                    <div className="insights_sec">
                                        <b>Himanshu patel</b>
                                        <div> <span>Jan 27, 2023</span> <span>5 mins read</span> </div>
                                        <h3>A Close Look at the Respective Features Laravel, Node JS and ROR and how They are Useful</h3>
                                        <p>Laravel, Node JS And Ruby On Rails (ROR) Are Among The Most Well-Known…</p>
                                    </div>
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
