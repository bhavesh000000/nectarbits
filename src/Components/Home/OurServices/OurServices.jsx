import React from 'react';

import './OurServices.css';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import e_commrce_solution from '../../../Assets/Images/e_commrce_solution.png';


export default function OurServices() {

    var sevices = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        centerPadding:'250px',
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (

    <div className="services_wrapper">
        <div className="services_wrap">
            <div className="services_title">
                <p>Our Services</p>
            </div>             
            <Slider {...sevices}>
                <div>
                    <div className="services_sec">
                        <div className="services_block">
                            <div className="services_conte">
                                <h2>E-Commerce Solution</h2>
                                <p>Single Vendor</p>
                                <div className="services_btn">
                                    <a href="#0">Enquire Now</a>
                                </div>
                            </div>
                            <div className="services_img">
                                <img src={e_commrce_solution} alt="e_commrce_solution" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services_sec">
                        <div className="services_block">
                            <div className="services_conte">
                                <h2>E-Commerce Solution</h2>
                                <p>Single Vendor</p>
                                <div className="services_btn">
                                    <a href="#0">Enquire Now</a>
                                </div>
                            </div>
                            <div className="services_img">
                                <img src={e_commrce_solution} alt="e_commrce_solution" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services_sec">
                        <div className="services_block">
                            <div className="services_conte">
                                <h2>E-Commerce Solution</h2>
                                <p>Single Vendor</p>
                                <div className="services_btn">
                                    <a href="#0">Enquire Now</a>
                                </div>
                            </div>
                            <div className="services_img">
                                <img src={e_commrce_solution} alt="e_commrce_solution" />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
    
  )
}
