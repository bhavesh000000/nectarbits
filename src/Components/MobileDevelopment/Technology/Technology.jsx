import React, { useState } from 'react'

import './Technology.css'
import { TechnologyData } from '../../../Immutable/MobileDevelopment/MobileDevelopment'

export default function Technology() {

    const [Technology, SetTechnology] = useState("Mobile Technologies");

  return (
    <div className="technology_wrapper">
        <div className="container">
            <div className="technology_wrap">
                <div className="technology_block">
                    <div className="technology_title">
                        <h2>Technology Stack</h2>
                    </div>
                    <div className="technology_sec">
                        <div className="technology_tabs">

                        <ul className="nav nav-tabs">
                            {
                                TechnologyData?.map((technology) => <li key={technology} className="nav-item" onClick={()=>SetTechnology(technology?.tabData?.tabTitle)}>
                                    <button className={`nav-link  ${technology?.tabData?.tabTitle == Technology && 'active'}`} >{technology?.tabData?.tabTitle}</button>
                                </li>)
                            }
                        </ul>
                        </div>
                        <div className="technology_tab_conte">
                            

                            {
                                TechnologyData.map((technology, idx) => (
                                    <div key={technology} className={`tab_pane ${Technology === technology?.tabData?.tabTitle ? 'tabs_active' : ''}`}>
                                    <div className='mobile_technologies' key={idx}>
                                        <ul>
                                        {technology?.tabData?.tabConte?.map((tabItem, index) => (
                                            <li key={index}>
                                                <div className="mobile_technologies_item">
                                                    <a href="#0">{tabItem}</a>
                                                </div>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
