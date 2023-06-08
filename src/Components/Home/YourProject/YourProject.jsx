import React from 'react'

import './YourProject.css'
import { NavLink } from 'react-router-dom'

export default function YourProject() {
  return (
    <div className="your_project_wrapper">
        <div className="container">
            <div className="your_project_wrap">
                <h2>Let’s discuss your project!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper libero velit.</p>
                <div className="your_project_btn">
                    <NavLink to="/contactus">Schedule Meeting</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
