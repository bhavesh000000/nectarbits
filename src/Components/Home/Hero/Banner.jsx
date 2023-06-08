import React from 'react';

import './Banner.css';

import hero_img1 from '../../../Assets/Images/hero_img1.webp';
import { NavLink } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="banner_wrapper">
        <div className="banner_wrap">
            <div className="container ">
                <div className="banner_block">
                    <div className="banner_sec">
                        <div className="banner_conte">
                            <div className="banner_title">
                                <p>Custom</p>
                                <h3>Software <br /> Development</h3>
                                <p>Company</p>
                                <div className="banner_btn">
                                    <NavLink to='/contactus'>Enquire Now</NavLink>
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
