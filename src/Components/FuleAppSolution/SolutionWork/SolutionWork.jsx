import React, { useState } from 'react';

import './SolutionWork.css';
import { SolutionWorkData } from '../../../Immutable/FuleAppSolution/FuleSolutionData';

export default function SolutionWork() {

    const [Solution, Setsolution] = useState("First Look");

  return (
    <div className='solution_work_wrapper'>
        <div className='solution_work_wrap'>
            <div className='container'>
                <div className='solution_work_block'>
                    <div className='solution_work_title'>
                        <h2>How Does On-Demand Fuel Delivery App Development Solution Work?</h2>
                        <p>Transform The Traditional Practices Of Standing In A Long Queue To Get The Car Tanks Full Or Help The 
                        Customers Who Are Left With No Choice When The Car Ran Out Of Fuel In The Midway With No Nearby Fuel 
                        Station Via On-Demand Fuel Delivery Application. The Time-Savvy And C
                        ost-Effective Approach Allows The Customers To Get The Fuel Anytime, Anywhere, And Even At Lower Prices.</p>
                    </div>
                    <div className='solution_work_sec'>
                        <div className='solution_work_nav'>
                            <div className='solution_work_nav_item'>
                                <ul className="nav nav-tabs">
                                    {
                                        SolutionWorkData?.map((solution) => <li key={solution} className="nav-item" onClick={()=>Setsolution(solution?.tabSolution?.tabTitle)}>
                                            <button className={`nav-link  ${solution?.tabSolution?.tabTitle == Solution && 'active'}`} >{solution?.tabSolution?.tabTitle}</button>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='solution_work_tab_conte'>
                            {
                                SolutionWorkData?.map((solution,idx) => <div key={solution} className= {`tab_pane ${ Solution==solution?.tabSolution?.tabTitle ? 'tabs_active' : ''  } `}>
                                        <div className='solution_work_conte'>
                                            <div className='solution_work_img'>
                                                <img src={solution?.tabSolution?.tabConte?.images} />
                                            </div>
                                            <div className='solution_work_btn'>
                                                <a href='#0'> {solution?.tabSolution?.tabConte?.link} <span><img src={solution?.tabSolution?.tabConte?.linkIc} /></span>  </a>
                                            </div>
                                        </div>
                                    </div>)
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
