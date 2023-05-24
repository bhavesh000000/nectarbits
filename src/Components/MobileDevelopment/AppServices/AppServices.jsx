import React from 'react'

import './AppServices.css'
import { AppServicesData } from '../../../Immutable/MobileDevelopment/MobileDevelopment'

export default function AppServices() {
  return (
    <div className="app_services_wrapper">
        <div className="container ">
            <div className="app_services_wrap">
                <div className="app_services_title">
                    <h2>How We Help You Drive A Change With Mobile App Development Services?</h2>
                </div>
                <div className="app_services_block">
                    <ul>
                        {
                            AppServicesData?.map((app, index) =>(
                                <li key={index}>
                                    <div className="app_services_sec">
                                        <h3>{app?.data?.title}</h3>
                                        <p>{app?.data?.conte}</p>
                                        <div className="app_services_link">
                                            <a href="#0">Learn More <span><img src={app?.data?.arrow_ic} alt="" /></span> </a>
                                        </div>
                                        <div className="app_services_box">
                                            <a href="#0">
                                                <div className="app_services_item">
                                                    <img src={app?.data?.app_icon} alt="" />
                                                    <p>iOS App  Development</p>
                                                    <span>
                                                        <img src={app?.data?.ic_more} alt="" />
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
