import React from 'react'

import './Offering.css'

import offering_img1 from '../../../Assets/Images/Services/offering_img1.webp';
import offering_img2 from '../../../Assets/Images/Services/offering_img2.webp';
import offering_img3 from '../../../Assets/Images/Services/offering_img3.webp';

export default function Offering() {
  return (
    <div class="offering_wrapper">
        <div class="container">
            <div class="offering_wrap">
                <div class="offering_title">
                    <h2>
                        Offering Flexible Pricing <br />
                        Hiring Models with onsite consulting
                    </h2>
                </div>
               <div class="offering_block">
                   <ul> 
                        <li>
                            <div class="offering_sec">
                                <div class="offering_img">
                                    <img src={offering_img1} alt="" />
                                </div>
                                <h3>Time and Material based model</h3>
                                <p>Pay As Per The Time Spent And Resources Involved In Your Project, Which Is An Ideal Choice For Agile Development And Long-Term Projects.</p>
                                <div class="offering_btn">
                                    <a href="#0">
                                        Learn More
                                        <span>
                                            <svg width="21px" height="11px" viewBox="0 0 21 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="services" transform="translate(-763.000000, -9810.000000)" fill="#000000" fill-rule="nonzero">
                                                        <g id="Group-77-Copy-3" transform="translate(150.000000, 9269.000000)">
                                                            <g id="Group-68" transform="translate(390.500000, 172.000000)">
                                                                <g id="Group-2-Copy-2" transform="translate(116.000000, 363.000000)">
                                                                    <g id="icons8-right_arrow" transform="translate(107.000000, 6.000000)">
                                                                        <polygon id="Path" points="14.8998508 0 13.7997013 1.09009009 17.1599413 4.71959539 0 4.71959539 0 6.30518097 17.1300448 6.30518097 13.7997013 9.90990991 14.8998508 11 20 5.5"></polygon>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="offering_sec">
                                <div class="offering_img">
                                    <img src={offering_img2} alt="" />
                                </div>
                                <h3>Fixed-Price model</h3>
                                <p>Know The Price Of The Project Before It’s Built And Then Make Payments After The Predetermined Milestones Are Achieved. It’s Preferred By Small Projects With Ultra-Specific Scope</p>
                                <div class="offering_btn">
                                    <a href="#0">
                                        Learn More
                                        <span>
                                            <svg width="21px" height="11px" viewBox="0 0 21 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="services" transform="translate(-763.000000, -9810.000000)" fill="#000000" fill-rule="nonzero">
                                                        <g id="Group-77-Copy-3" transform="translate(150.000000, 9269.000000)">
                                                            <g id="Group-68" transform="translate(390.500000, 172.000000)">
                                                                <g id="Group-2-Copy-2" transform="translate(116.000000, 363.000000)">
                                                                    <g id="icons8-right_arrow" transform="translate(107.000000, 6.000000)">
                                                                        <polygon id="Path" points="14.8998508 0 13.7997013 1.09009009 17.1599413 4.71959539 0 4.71959539 0 6.30518097 17.1300448 6.30518097 13.7997013 9.90990991 14.8998508 11 20 5.5"></polygon>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="offering_sec">
                                <div class="offering_img">
                                    <img src={offering_img3} alt="" />
                                </div>
                                <h3>Hire Dedicated Team</h3>
                                <p>Whether Looking To Extend Your Team Or Need A Team To Develop The Website From Scratch, Our Expert PHP Developers Will Work As Your Dedicated Team.</p>
                                <div class="offering_btn">
                                    <a href="#0">
                                        Learn More
                                        <span>
                                            <svg width="21px" height="11px" viewBox="0 0 21 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g id="design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="services" transform="translate(-763.000000, -9810.000000)" fill="#000000" fill-rule="nonzero">
                                                        <g id="Group-77-Copy-3" transform="translate(150.000000, 9269.000000)">
                                                            <g id="Group-68" transform="translate(390.500000, 172.000000)">
                                                                <g id="Group-2-Copy-2" transform="translate(116.000000, 363.000000)">
                                                                    <g id="icons8-right_arrow" transform="translate(107.000000, 6.000000)">
                                                                        <polygon id="Path" points="14.8998508 0 13.7997013 1.09009009 17.1599413 4.71959539 0 4.71959539 0 6.30518097 17.1300448 6.30518097 13.7997013 9.90990991 14.8998508 11 20 5.5"></polygon>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
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
