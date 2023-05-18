import React from 'react'

import './Footer.css'

import logo from '../../../Assets/Images/logo.webp'

import ic_facebook from '../../../Assets/Images/ic_facebook.webp'
import ic_twitter from '../../../Assets/Images/ic_twitter.webp'
import ic_instagram from '../../../Assets/Images/ic_instagram.webp'
import ic_linked_in from '../../../Assets/Images/ic_linked_in.webp'
import ic_youtube from '../../../Assets/Images/ic_youtube.webp'
import ic_dribble from '../../../Assets/Images/ic_dribble.webp'

import footer_img from '../../../Assets/Images/footer_img.webp'

export default function Footer() {
  return (
    <div className="footer_wrapper">
        <div className="container">
            <footer>
                <div className="footer_wrap">
                    <div className="footer_block">
                        <div className="footer_menu_block">
                            <div className="footer_logo">
                                <div className="footer_logo_sec">
                                    <a href="#0">
                                        <img src={logo} alt="" />
                                    </a>
                                    <p>
                                        Nectarbits Bestows A Complete Set Of Software/Mobile App-Led Services To Transform 
                                        Your Businesses With Agile Processes. We Ensure That We Deliver Your Project Efficiently And In A Timely Manner. 
                                        Get In Touch With Nectarbits For Innovative And Tech-Led Software Solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="footer_menu_block">
                            <div className="footer_menu">
                                <h2>About Us</h2>
                                <ul>
                                    <li><a href="#0">About Us</a></li>
                                    <li><a href="#0">Process</a></li>
                                    <li><a href="#0">Career</a></li>
                                    <li><a href="#0">Awards & Certification</a></li>
                                    <li><a href="#0">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_menu_block">
                            <div className="footer_menu">
                                <h2>Ready Solutions</h2>
                                <ul>
                                    <li><a href="#0">On-Demand App Solution</a></li>
                                    <li><a href="#0">E-commerce App</a></li>
                                    <li><a href="#0">Taxi Booking App</a></li>
                                    <li><a href="#0">Taxi Dispatch App</a></li>
                                    <li><a href="#0">Classified App</a></li>
                                    <li><a href="#0">Grocery Delivery App</a></li>
                                    <li><a href="#0">Food Delivery App</a></li>
                                    <li><a href="#0">Car/Taxi Rental Software</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_menu_block">
                            <div className="footer_menu">
                                <h2>Services</h2>
                                <ul>
                                    <li><a href="#0">iPhone App Development</a></li>
                                    <li><a href="#0">Android App Development</a></li>
                                    <li><a href="#0">React Native Development</a></li>
                                    <li><a href="#0">Flutter App Development</a></li>
                                    <li><a href="#0">Ecommerce Website Developmentc</a></li>
                                    <li><a href="#0">UI & UX Design</a></li>
                                    <li><a href="#0">Digital Marketing</a></li>
                                    <li><a href="#0">Maintenance & Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer_career">
                        <div className="career_wrap">
                            <div className="career_block">
                                <div className="career_conte">
                                    <h3>Sales And Career</h3>
                                    <p><span>Email:</span><a href="mailto:admin@nectarbits.ca">admin@nectarbits.ca</a></p>
                                    <p><span>Phone:</span><a href="#0"> +1 778-552-2466</a></p>
                                    <p><span>Skype:</span><a href="#0"> NECTARBITS.INQUIRY</a></p>
                                </div>
                            </div>
                            <div className="career_block">
                                <div className="career_btn">
                                    <a href="#0">Corporate Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_social">
                        <div className="footer_social_block">
                            <div className="footer_copy">
                                <p>Copyright © Nectarbits 2023, All Right Reserved. Designed And <br /> Developed By <a href="#0">NectarBits</a></p>
                            </div>
                            <div className="footer_social_icon">
                                <ul>
                                    <li><a href="#0"><img src={ic_facebook} alt="" /></a></li>
                                    <li><a href="#0"><img src={ic_twitter} alt="" /></a></li>
                                    <li><a href="#0"><img src={ic_instagram} alt="" /></a></li>
                                    <li><a href="#0"><img src={ic_linked_in} alt="" /></a></li>
                                    <li><a href="#0"><img src={ic_youtube} alt="" /></a></li>
                                    <li><a href="#0"><img src={ic_dribble} alt="" /></a></li>
                                </ul>
                                <div className="footer_img">
                                    <a href="#0"><img src={footer_img} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
        </div>
    </div>
  )
}
