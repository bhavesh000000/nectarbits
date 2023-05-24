import React from 'react'

import './OurWork.css';

import ourwork_img1 from '../../../Assets/Images/ourwork_img1.webp';
import ourwork_img2 from '../../../Assets/Images/ourwork_img2.webp';
import ourwork_img3 from '../../../Assets/Images/ourwork_img3.webp';
import ourwork_img4 from '../../../Assets/Images/ourwork_img4.webp';

export default function OurWork() {
  return (
    <div className="ourwork_wrapper">
        <div className="container">
            <div className="ourwork_wrap">
                <div className="ourwork_title">
                    <div className='ourwork_title_block'>
                        <h3>Our Work Ethics</h3>
                        <p>Nectarbits company has core values that are communicated and promoted within employees 
                        to ensure that the company’s culture and customer’s satisfaction with the result is realized at every stage of the process. 
                        These values are responsibility, punctuality, honesty, proactivity, and transparency.</p>
                    </div>
                    <div className='ourwork_title_btn'>
                        <a href='#0'>Contact Us</a>
                    </div>
                </div>
                <div className='ourwork_conte'>
                    <div className="ourwork_sec">
                        <div className="ourwork_block">
                            <div className='ourwork_bg'>
                                <div className="ourwork_inner_block">
                                    <div className="ourwork_img">
                                        <img src={ourwork_img1} alt="" />
                                    </div>
                                    <h3>Crystel Clear Communication</h3>
                                    <p>Multiple Channels Of Communication Are Opened To Ensure Smooth Communication With Clients And Bring The Right Solution In Time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ourwork_block">
                            <div className='ourwork_bg'>
                                <div className="ourwork_inner_block">
                                    <div className="ourwork_img">
                                        <img src={ourwork_img2} alt="" />
                                    </div>
                                    <h3>Transparency</h3>
                                    <p>We Take Our Business Relations Seriously. The Client Is Kept Informed About The Project’s Progress With Access To PMS.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ourwork_block">
                            <div className='ourwork_bg'>
                                <div className="ourwork_inner_block">
                                    <div className="ourwork_img">
                                        <img src={ourwork_img3} alt="" />
                                    </div>
                                    <h3>Sign NDA</h3>
                                    <p>Ensure Your Project Idea Confidentiality That It Won’t Be Disclosed To Anyone Before The Full-Fledged Solution Gets Built.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ourwork_block">
                            <div className='ourwork_bg'>
                                <div className="ourwork_inner_block">
                                    <div className="ourwork_img">
                                        <img src={ourwork_img4} alt="" />
                                    </div>
                                    <h3>Respect Your Time</h3>
                                    <p>The Team Helps Your Business Quickly Respond To The Market Changes And Demands With App Development Before The Deadline.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
