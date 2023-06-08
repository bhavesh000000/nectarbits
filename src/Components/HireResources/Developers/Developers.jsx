import React from 'react'

import './Developers.css'
import { NavLink } from 'react-router-dom'

export default function Developers() {
  return (
    <div className='developers_wrapper'>
        <div className='container'>
            <div className='developers_wrap'>
                <h2>Looking For Dedicated iOS Mobile App Developers?</h2>
                <div className='developers_btn'>
                    <NavLink to="/contactus">Schedule Interview</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
