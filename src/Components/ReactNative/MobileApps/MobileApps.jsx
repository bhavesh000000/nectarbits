import React from 'react'

import './MobileApps.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileAppsData } from '../../../Immutable/ReactNative/ReactNativeData';

export default function MobileApps() {

    var mobile_apps = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
      };

  return (
    <div className='mobile_apps_wrapper'>
        <div className='mobile_apps_wrap'>
            <div className='container'>
                <div className='mobile_apps_title'>
                    <h3>On-demand Mobile Apps</h3>
                </div>
                <div className='mobile_apps_block'>
                    <div className='mobile_apps_sec'>
                        <h2>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est</h2>
                        <div className='mobile_apps_btn'>
                            <a href='#0'>Learn More</a>
                        </div>
                    </div>
                    <div className='mobile_apps_slider'>
                    <Slider {...mobile_apps}>
                            {
                                MobileAppsData?.data?.map( (mobileApp) => (
                                <div>
                                    <div className='mobile_apps_slider_block'>
                                        <div className='mobile_apps_slider_bg'>
                                            <div className='mobile_apps_slider_sec'>
                                                <h3>{mobileApp?.title}</h3>
                                                <p>{mobileApp?.conte}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ) )
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
