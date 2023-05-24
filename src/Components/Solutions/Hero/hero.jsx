import React from 'react'

import './Hero.css';

import banner from '../../../Assets/Images/Slution/banner.webp'

export default function Hero() {
  return (
    <div className='solution_hero_sec'>
        <div className="banner_wrapper">
            <div className="banner_wrap">
                <div className="container ">
                    <div className="banner_block">
                        <div className="banner_sec">
                            <div className="banner_conte">
                                <div className="banner_inner_conte">
                                    <h3>
                                         Solutions <span>we</span> <br /> Provide <span>for Your <br /> Business</span>
                                    </h3>
                                    <div className="banner_btn">
                                        <a href="#0">Get in Touch</a>
                                    </div>    
                                </div>
                            </div>
                            <div className="banner_img">
                                <div className="banner_img_block">
                                    <img src={banner} alt="" />
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
