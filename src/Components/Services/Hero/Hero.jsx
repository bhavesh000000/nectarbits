import React from 'react'

import './Hero.css'

import hero_img1 from '../../../Assets/Images/Services/hero_img1.png';

export default function Hero() {
  return (
    <div class="banner_wrapper">
    <div class="banner_wrap">
        <div class="container ">
            <div class="banner_block">
                <div class="banner_sec">
                    <div class="banner_conte">
                        <div class="banner_title">
                            <h2>Our <span>On-Demand</span> <br /> Mobile App and Website <span>Development Services</span> </h2>
                            <div class="banner_btn">
                                <a href="#0">Let’s Talk</a>
                            </div>
                        </div>
                    </div>
                    <div class="banner_img">
                        <div class="banner_img_block">
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
