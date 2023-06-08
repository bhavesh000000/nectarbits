import React from 'react'

import './Anywhere.css';
import { NavLink } from 'react-router-dom';

export default function Anywhere() {
  return (
    <div className='anywhere_wrapper'>
        <div className='anywhere_wrap'>
            <div className='container'>
                <div className='anywhere_block'>
                    <h3>Take A Massive Leap With <br />
                        The Fuel Delivery Anytime, Anywhere</h3>
                    <p>The Customers Have A Lot Of Places To Go And Things To Do, So Let Them Do It All With No Nightmare Of 
                    Running Out Of Fuel Halfway Through The Fuel Delivery App. 
                    Earn Customers, Loyalty, And Revenue With Next-Gen On-Demand Fuel Delivery Solution Development.</p>    
                    <div className='anywhere_btn'>
                        <NavLink to="/contactus">Schedule Meeting</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
