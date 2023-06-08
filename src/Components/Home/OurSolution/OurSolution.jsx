import React from 'react';

import './OurSolution.css';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import e_commrce_solution from '../../../Assets/Images/e_commrce_solution.webp';
import illustration_car_wash from '../../../Assets/Images/illustration_car_wash.webp';
import illustration_food_delivery from '../../../Assets/Images/illustration_food_delivery.webp';
import illustration_fuel_delivery from '../../../Assets/Images/illustration_fuel_delivery.webp';
import illustration_taxi_solution from '../../../Assets/Images/illustration_taxi_solution.webp';
import { NavLink } from 'react-router-dom';


export default function OurSolution() {

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
                <p>Our Solution</p>
            </div>             
            <Slider {...sevices}>
                <div>
                    <div className="services_sec">
                        <div className="services_block">
                            <div className="services_conte">
                                <h2>E-Commerce Solution</h2>
                                <p>Single Vendor</p>
                                <span>Get the best solution in the industry for your E-commerce Business. Take your business to next level with our  next gen technology filled software. Book a meeting and get in touch with us. </span>
                                <div className="services_btn">
                                    <NavLink to='/contactus'>Enquire Now</NavLink>
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
                                <h2>Fuel delivery Solution</h2>
                                <p>Single Vendor</p>
                                <span>Get the best solution in the industry for your E-commerce Business. Take your business to next level with our  next gen technology filled software. Book a meeting and get in touch with us. </span>
                                <div className="services_btn">
                                    <NavLink to='/contactus'>Enquire Now</NavLink>
                                </div>
                            </div>
                            <div className="services_img">
                                <img src={illustration_fuel_delivery} alt="e_commrce_solution" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services_sec">
                        <div className="services_block">
                            <div className="services_conte">
                                <h2>Car Was Solution</h2>
                                <p>Single Vendor</p>
                                <span>Get the best solution in the industry for your E-commerce Business. Take your business to next level with our  next gen technology filled software. Book a meeting and get in touch with us. </span>
                                <div className="services_btn">
                                    <NavLink to='/contactus'>Enquire Now</NavLink>
                                </div>
                            </div>
                            <div className="services_img">
                                <img src={illustration_car_wash} alt="e_commrce_solution" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services_sec">
                        <div className="services_block">
                            <div className="services_conte">
                                <h2>Food Delievry Solution</h2>
                                <p>Single Vendor</p>
                                <span>Get the best solution in the industry for your E-commerce Business. Take your business to next level with our  next gen technology filled software. Book a meeting and get in touch with us. </span>
                                <div className="services_btn">
                                    <NavLink to='/contactus'>Enquire Now</NavLink>
                                </div>
                            </div>
                            <div className="services_img">
                                <img src={illustration_food_delivery} alt="e_commrce_solution" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="services_sec">
                        <div className="services_block">
                            <div className="services_conte">
                                <h2>Taxi Solution</h2>
                                <p>Single Vendor</p>
                                <span>Get the best solution in the industry for your E-commerce Business. Take your business to next level with our  next gen technology filled software. Book a meeting and get in touch with us. </span>
                                <div className="services_btn">
                                    <NavLink to='/contactus'>Enquire Now</NavLink>
                                </div>
                            </div>
                            <div className="services_img">
                                <img src={illustration_taxi_solution} alt="e_commrce_solution" />
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
    
  )
}
