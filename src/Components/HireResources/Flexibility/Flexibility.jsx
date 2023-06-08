import React from 'react'

import './Flexibility.css'
import { NavLink } from 'react-router-dom'

export default function Flexibility() {
  return (
    <div className='flexibility_wrapper'>
        <div className='container'>
            <div className='flexibility_wrap'>
                <div className='flexibility_block'>
                    <div className='flexibility_sec'>
                        <div className='flexibility_conte'>
                            <h3>What’s more? Flexibility</h3>
                            <p>When You Are Not Satisfied With The Resource After The Development Has Started, You Are Free To Replace The Developer With A New Resource.</p>
                        </div>
                        <div className='flexibility_btn'>
                            <NavLink to="/contactus">Book A Call</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
