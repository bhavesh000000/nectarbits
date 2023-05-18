import React from 'react'

import './Industries.css'

import industries_img1 from '../../../Assets/Images/industries_img1.webp'
import industries_img2 from '../../../Assets/Images/industries_img2.webp'
import industries_img3 from '../../../Assets/Images/industries_img3.webp'
import industries_img4 from '../../../Assets/Images/industries_img4.webp'
import industries_img5 from '../../../Assets/Images/industries_img5.webp'
import industries_img6 from '../../../Assets/Images/industries_img6.webp'
import industries_img7 from '../../../Assets/Images/industries_img7.webp'
import industries_img8 from '../../../Assets/Images/industries_img8.webp'

export default function Industries() {
  return (
    <div className="industries_wrapper">
        <div className="container">
            <div className="industries_wrap">
                <div className="industries_block">
                    <div className="industries_sec">
                        <div className="industries_conte">
                            <h2>Industries We Serve</h2>
                            <p>Enjoy A Short Tour Of Our Legacy, And You Will Come To Learn The Products Of Business Necessity We Built For Various Industry Verticals.</p>
                            <div className="industries_btn">
                                <a href="#0">More Customers</a>
                            </div>
                        </div>
                    </div>
                    <div className="industries_img">
                        <div className="industries_img_block">
                            <ul>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img1} alt="" />
                                        <p>Retail & Ecommerce</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img2} alt="" />
                                        <p>Travel & Tourism</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img3} alt="" />
                                        <p>Dating Industry</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img4} alt="" />
                                        <p>Logistic & transportation</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img5} alt="" />
                                        <p>Smart Technologies</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img6} alt="" />
                                        <p>Healthcare</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img7} alt="" />
                                        <p>Oil & Gas</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="industries_img_sec">
                                        <img src={industries_img8} alt="" />
                                        <p>Lifestyle</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
