import React from 'react'

import './WhyUs.css';

import icon_bullet from '../../../Assets/Images/Slution/icon_bullet.png';

export default function WhyUs() {
  return (
    <div className='why_us_wrapper'>
        <div className='container'>
            <div className='why_us_wrap'>
                <div className='why_us_block'>
                    <div className='why_us_conte'>
                        <h3>why us</h3>
                        <p>
                            Are You Looking To Create An Uber-Like App For Your Fuel Delivery Business? Nectarbits, 
                            As The Top Fuel Delivery App Development Company, Can Help You Turn This Vision Into Reality.
                        </p>
                        <p>
                            A Company Can Help You Turn This Vision Into Reality. With Expert Fuel Delivery App Developers And Programmers In Our 
                            In-House Team, We Have Been Able To Help Hundreds
                            Of Fuel Business Owners Go Online. Do You Want To Use Our Custom Fuel Delivery App Development Services? Call Us Now.
                        </p>
                        <div className='why_us_btn'>
                            <a href='#0'>Schedule Call</a>
                        </div>
                    </div>
                </div>
                <div className='why_us_sec'>
                    <ul>
                        <li>
                            <div className='why_us_item'>
                                <div className='why_us_item_block'>
                                    <div className='why_us_icon'>
                                        <img src={icon_bullet} />
                                    </div>
                                    <h3>Robust Solution</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='why_us_item'>
                                <div className='why_us_item_block'>
                                    <div className='why_us_icon'>
                                        <img src={icon_bullet} />
                                    </div>
                                    <h3>Robust Solution</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='why_us_item'>
                                <div className='why_us_item_block'>
                                    <div className='why_us_icon'>
                                        <img src={icon_bullet} />
                                    </div>
                                    <h3>Robust Solution</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
