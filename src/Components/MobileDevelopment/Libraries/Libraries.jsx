import React from 'react'

import './Libraries.css'

import ic_flutter from '../../../Assets/Images/MobileAppDevelopment/ic_flutter.webp'
import ic_react_native from '../../../Assets/Images/MobileAppDevelopment/ic_react_native.webp'
import ic_ios from '../../../Assets/Images/MobileAppDevelopment/ic_ios.webp'
import ic_android from '../../../Assets/Images/MobileAppDevelopment/ic_android.webp'

export default function Libraries() {
  return (
    <div class="libraries_wrapper">
        <div class="libraries_wrap">
             <div class="container">
                <div class="libraries_block">
                    <div class="libraries_title">
                        <h3>Open Source Libraries</h3>
                    </div>
                    <div class="libraries_img_block">
                        <ul>
                            <li>
                                <a href="#0" class="libraries_img_sec libraries_img_sec1">
                                    <div class="libraries_img">
                                        <img src={ic_flutter} alt="" />
                                    </div>
                                    <div class="libraries_conte">
                                        <p>Animated Segment</p>
                                        <span>Flutter</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#0" class="libraries_img_sec libraries_img_sec2">
                                    <div class="libraries_img">
                                        <img src={ic_react_native} alt="" />
                                    </div>
                                    <div class="libraries_conte">
                                        <p>Speed Progress View</p>
                                        <span>React Native</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#0" class="libraries_img_sec libraries_img_sec3">
                                    <div class="libraries_img">
                                        <img src={ic_ios} alt="" />
                                    </div>
                                    <div class="libraries_conte">
                                        <p>Letters Animation</p>
                                        <span>iOS/Swift</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#0" class="libraries_img_sec libraries_img_sec4">
                                    <div class="libraries_img">
                                        <img src={ic_android} alt="" />
                                    </div>
                                    <div class="libraries_conte">
                                        <p>Lassi Picker</p>
                                        <span>Android/Kotlin</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="libraries_btn">
                        <a href="#0">Enquire Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
