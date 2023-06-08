import React from 'react'

import './Idea.css';
import { NavLink } from 'react-router-dom';

export default function Idea() {
  return (
    <div className="idea_wrapper">
        <div className="idea_wrap">
            <div className="container">
                <div className="idea_block">
                    <div className="idea_sec">
                        <div className="idea_conte">
                            <h2>Have an Idea?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, odit rerum.</p>
                            <div className="idea_btn">
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
