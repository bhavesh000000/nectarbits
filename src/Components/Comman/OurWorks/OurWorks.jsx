import React from 'react'

import './OurWorks.css';

import our_works_img1 from '../../../Assets/Images/our_works_img1.png';
import our_works_img2 from '../../../Assets/Images/our_works_img2.png';
import our_works_img3 from '../../../Assets/Images/our_works_img3.png';

export default function OurWorks() {
  return (
    <div className="our_works_wrapper">
    <div className="container">
        <div className="our_works_wrap">
            <div className="our_works_title">
                <h2>Our Works</h2>
                <p>The successful React Native project showcases the excellent services that we have offered to the businesses of various industry verticals.SS</p>
            </div>
            <div className="our_works_block">
                <div className="delivery_wrap">
                    <div className="delivery_img">
                        <div className="delivery_img_block">
                            <img src={our_works_img1} alt="" />
                        </div>
                    </div>
                    <div className="delivery_block">
                        <div className="delivery_conte">
                            <h3>Get Fuel - Fuel <br /> Delivery App</h3>
                            <p>Start On-Demand Gas Fuel Delivery Business Today</p>
                            <div className="delivery_btn">
                                <a href="#0">See Case Study</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our_works_sec">
                <div className="behance_block">
                    <div className="behance_sec">
                        <div className="behance_img">
                            <div className="behance_img_block">
                                <div className="behance_inner_img">
                                    <div className="behance_img_sec">
                                        <img src={our_works_img2} alt="" />
                                    </div>
                                    <h2>Infrawheel E-commerce App</h2>
                                    <p>Online Real Estate Stores</p>
                                </div>
                            </div>
                            <div className="behance_img_block">
                                <div className="behance_inner_img">
                                    <div className="behance_img_sec">
                                        <img src={our_works_img3} alt="" />
                                    </div>
                                    <h2>Street Reporter - News Reporter App</h2>
                                    <p>News Reporter App Online</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="behance_conte">
                        <div className="behance_title">
                            <h2 className="dribble">Dribble.</h2>
                            <h2>Behance.</h2>
                            <h2>Github.</h2>
                            <div className="behance_btn">
                                <a href="#0">View Portfolio</a>
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
