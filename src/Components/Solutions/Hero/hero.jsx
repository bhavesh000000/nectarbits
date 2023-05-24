import React from 'react'

import './Hero.css';

import banner from '../../../Assets/Images/Slution/banner.webp'

export default function Hero({data}) {
  return (
    <div className='solution_hero_sec'>
        <div class="banner_wrapper">
            <div class="banner_wrap">
                <div class="container ">
                    <div class="banner_block">
                        <div class="banner_sec">
                            <div class="banner_conte">
                                <div class="banner_inner_conte">
                                    <h3>
                                         Solutions <span>we</span> <br /> Provide <span>for Your <br /> Business</span>
                                    </h3>
                                    <div class="banner_btn">
                                        <a href="#0">Get in Touch</a>
                                    </div>    
                                </div>
                            </div>
                            <div class="banner_img">
                                <div class="banner_img_block">
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
