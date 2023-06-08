import React from 'react'

import './Hero.css'

import hero_img1 from '../../../Assets/Images/Services/hero_img1.webp';
import { NavLink } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="banner_wrapper">
    <div className="banner_wrap">
        <div className="container ">
            <div className="banner_block">
                <div className="banner_sec">
                    <div className="banner_conte">
                        <div className="banner_title">
                            <h2>Our <span>On-Demand</span> <br /> Mobile App and Website <span>Development Services</span> </h2>
                            <div className="banner_btn">
                                <NavLink to="/contactus">Let’s Talk</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="banner_img">
                        <div className="banner_img_block">
                            <img src={hero_img1} alt="hero_img1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
