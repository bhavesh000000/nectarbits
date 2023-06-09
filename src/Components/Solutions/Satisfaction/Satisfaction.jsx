import React from 'react'

import './Satisfaction.css'

import satisfaction from '../../../Assets/Images/Slution/satisfaction.webp'
import { NavLink } from 'react-router-dom'

export default function Satisfaction() {
  return (
    <div className='satisfaction_wrapper'>
        <div className='satisfaction_wrap'>
            <div className='container'>
                <div className='satisfaction_block'>
                    <div className='satisfaction_img'>
                        <div className='satisfaction_img_block'>
                            <img src={satisfaction} />
                        </div>
                    </div>
                    <div className='satisfaction_conte'>
                        <div className='satisfaction_sec'>
                            <h2>We are standing on the top of the ladder with 90% client satisfaction.</h2>
                            <div className='satisfaction_btn'>
                                <NavLink to="/contactus">Schedule Meeting</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
