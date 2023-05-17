import React from 'react'

import './CoreServices.css';

import ic_react_native from '../../../Assets/Images/Services/ic_react_native.png';
import ic_flutter from '../../../Assets/Images/Services/ic_flutter.png';
import ic_swift from '../../../Assets/Images/Services/ic_swift.png';
import ic_ios from '../../../Assets/Images/Services/ic_ios.png';
import img_mobile_app_devlopment from '../../../Assets/Images/Services/img_mobile_app_devlopment.png';
import img_web_development from '../../../Assets/Images/Services/img_web_development.png';
import ic_php from '../../../Assets/Images/Services/ic_php.png';
import ic_laravel from '../../../Assets/Images/Services/ic_laravel.png';
import img_ui_ux from '../../../Assets/Images/Services/img_ui_ux.png';

import ic_more from '../../../Assets/Images/Services/ic_more.png';

export default function CoreServices() {
  return (
    <div class="core_services_wrapper">
        <div class="core_services_wrap">
            <div class="container">
                <div class="core_services_title">
                    <h3>Core Services</h3>
                    <p>We Are App Development Service Provider That Works With Users To Maximize Profits And Grow Business Quickly.</p>
                </div>
                <div class="mobile_development">
                    <div class="cm_development_title">
                        <h2>Mobile App Development</h2>
                    </div>
                    <div class="mobile_development_block">
                        <div class="mobile_development_sec">
                            <div class="mobile_development_conte">
                                <ul class="mobile_development_item"> 
                                     <li>
                                         <a href="#0" class="core_services_sec">
                                            <img src={ic_react_native} alt="" />
                                            <p>React Native Development</p>
                                            <span>
                                                <img src={ic_more} alt="" />
                                            </span>
                                         </a>
                                     </li>
                                     <li>
                                        <a href="#0" class="core_services_sec">
                                           <img src={ic_flutter} alt="" />
                                           <p>Flutter Development</p>
                                           <span>
                                               <img src={ic_more} alt="" />
                                           </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" class="core_services_sec">
                                           <img src={ic_swift} alt="" />
                                           <p>Swift App Development</p>
                                           <span>
                                               <img src={ic_more} alt="" />
                                           </span>
                                        </a>
                                    </li>
                                    <li class="iso_destop_none">
                                        <div class="mobile_development_btn_sec">
                                            <a href="#0" class="core_services_sec">
                                                <img src={ic_ios} alt="" />
                                                <p>iOS App  Development</p>
                                                <span>
                                                    <img src={ic_more} alt="" />
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <div class="mobile_development_wrap">
                                    <div class="mobile_development_btn">
                                        <p>
                                            We Transform The Way Your Business Operates And Capitalize On Opportunities With Mobile Solutions That Perform Well On Both The IOS And Android Platforms.
                                        </p>
                                        <div class="mobile_development_btn_block">
                                            <a href="#0">Explore</a>
                                        </div>
                                    </div>
                                    <div class="mobile_development_btn_sec iso_mobile_none">
                                        <a href="#0" class="core_services_sec">
                                            <img src={ic_ios} alt="" />
                                            <p>iOS App  Development</p>
                                            <span>
                                                <img src={ic_more} alt="" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile_development_img">
                                <div class="mobile_development_img_block">
                                    <img src={img_mobile_app_devlopment} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="web_development">
                    <div class="web_development_block">
                        <div class="web_development_img">
                            <div class="web_development_img_block">
                                <img src={img_web_development} alt="" />
                            </div>
                        </div>
                        <div class="web_development_conte">
                            <div class="cm_development_title cm_development_title_right">
                                <h2>Web Development</h2>
                            </div>
                            <div class="mobile_development_conte">
                                <ul class="mobile_development_item"> 
                                     <li>
                                        <a href="#0" class="core_services_sec">
                                           <img src={ic_php} alt="" />
                                           <p>PHP 
                                            Development</p>
                                           <span>
                                               <img src={ic_more} alt="" />
                                           </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" class="core_services_sec">
                                           <img src={ic_laravel} alt="" />
                                           <p>Laravel Development</p>
                                           <span>
                                               <img src={ic_more} alt="" />
                                           </span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="mobile_development_wrap">
                                    <div class="mobile_development_btn">
                                        <p>
                                            The Team Engineers And Deploys The Scalable, Responsive, And Robust Web That Fosters Your Business Growth And Improves The Prominence In The Market.
                                        </p>
                                        <div class="mobile_development_btn_block">
                                            <a href="#0">Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui_ux_development">
                    <div class="mobile_development_block">
                        <div class="cm_development_title">
                            <h2>UI/UX Development</h2>
                        </div>
                        <div class="mobile_development_sec">
                            <div class="mobile_development_conte">
                                <ul class="mobile_development_item"> 
                                     <li>
                                         <a href="#0" class="core_services_sec">
                                            <img src={ic_react_native} alt="" />
                                            <p>React Native Development</p>
                                            <span>
                                                <img src={ic_more} alt="" />
                                            </span>
                                         </a>
                                     </li>
                                </ul>
                                <div class="mobile_development_wrap">
                                    <div class="mobile_development_btn">
                                        <p>
                                            The Designer Crew Craft Elegant, High-Quality And Responsive Designs That Deliver Groundbreaking UX Irrespective Of The Device Type And Size.
                                        </p>
                                        <div class="mobile_development_btn_block">
                                            <a href="#0">Explore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile_development_img">
                                <div class="mobile_development_img_block">
                                    <img src={img_ui_ux} alt="" />
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
