import React from 'react'

import thankyou from '../../Assets/Images/thankyou.webp'

import './Thankyu.css'
import { NavLink } from 'react-router-dom'

export default function Thankyou() {
  return (
    <div className='thank_you_wrapper'>
        <div className='thank_you_wrap'>
            <div className='container'>
                <div className='thank_you_block'>
                    <img src={thankyou} alt='thankyou' />
                    <h2>Thanks for submitting!</h2>
                    <p>Your message has been send!</p>
                    <NavLink to='/'> 
                        <button>Go Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
