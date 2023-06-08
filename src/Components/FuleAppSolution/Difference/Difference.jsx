import React, { useState } from 'react'

import './Difference.css'

import difference_img from '../../../Assets/Images/Slution/difference_img.webp'
import Tab from 'react-bootstrap/Tab';
import { DifferenceData } from '../../../Immutable/FuleAppSolution/FuleSolutionData';
import { NavLink } from 'react-router-dom';


export default function Difference() {

    const [difference, setDifference] = useState("Start Ups");
    const [adddifference, setAdddifference] = useState("");

  return (
    <div className='difference_wrapper'>
        <div className='container'>
            <div className='difference_wrap'>
                <div className='difference_title'>
                    <h2>The Fuel Delivery App Solution That Creates A Big Difference!</h2>
                    <p>Be It’s For Fuel Stations Or Fuel/Gas Companies, The White-Label Fuel/Gas Delivery App Is 
                    Customized To The Client’s Business Needs That Enable Them To Enjoy The Perks Of Moving Into On-Demand Orbits. Also, It Allows 
                    Customers To Enjoy The Convenience Of Getting The Tanks Full At The Doorstep Or On The Go.</p>
                </div>
                <div className='difference_sec'>
                    <div className='difference_block'>
                        <div className='difference_img'>
                            <div className='difference_img_block'>
                                <img src={difference_img} />
                            </div>
                        </div>
                        <div className='difference_conte'>
                            <div className='difference_tabs'>
                            
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                                    <div className='difference_tabs_overflow'>
                                        <ul className="nav nav-tabs  d-lg-flex">
                                            {
                                                DifferenceData?.map((Difference) => <li key={Difference} className="nav-item" onClick={()=>setDifference(Difference?.data?.tabTitle)}>
                                                    <button className={`nav-link  ${Difference?.data?.tabTitle == difference && 'active'}`} >{Difference?.data?.tabTitle}</button>
                                                </li>)
                                            }
                                        </ul>
                                    </div>


                                            {
                                                DifferenceData?.map((Difference,idx) => <div key={Difference} className= {`tab_pane ${ difference==Difference?.data?.tabTitle ? 'tabs_active' : ''  } `}>
                                                        <div className='difference_tab_conte'>
                                                            <h3>{Difference?.data?.accData?.title}</h3>
                                                            <p>{Difference?.data?.accData?.conte}</p>
                                                            <div className='difference_tab_btn'>
                                                                <NavLink to='/contactus'>{Difference?.data?.accData?.btn}</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                }
                               
                                    {/* <Nav variant="pills" >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Start Ups</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Fuel Station</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="three">Oil Companies</Nav.Link>
                                        </Nav.Item>
                                    </Nav> */}
                                    {/* <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className='difference_tab_conte'>
                                                <h3>On-Demand Fuel Delivery Startup</h3>
                                                <p>Fuel Retailers Are Looking To Mobilize The Services With Fuel Delivery Solutions But Start-Ups 
                                                Can’t Afford To Get Built An Individual App. Build A Fuel Aggregator 
                                                Network By Providing A Platform For Fuel Retailers To Connect With Customers And Fill The Tanks On Demand.</p>
                                                <div className='difference_tab_btn'>
                                                    <a href='#0'>Get In Touch</a>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className='difference_tab_conte'>
                                                <h3>On-Demand Fuel Delivery Startup</h3>
                                                <p>Fuel Retailers Are Looking To Mobilize The Services With Fuel Delivery Solutions But Start-Ups 
                                                Can’t Afford To Get Built An Individual App. Build A Fuel Aggregator 
                                                Network By Providing A Platform For Fuel Retailers To Connect With Customers And Fill The Tanks On Demand.</p>
                                                <div className='difference_tab_btn'>
                                                    <a href='#0'>Get In Touch</a>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="three">
                                            <div className='difference_tab_conte'>
                                                <h3>On-Demand Fuel Delivery Startup</h3>
                                                <p>Fuel Retailers Are Looking To Mobilize The Services With Fuel Delivery Solutions But Start-Ups 
                                                Can’t Afford To Get Built An Individual App. Build A Fuel Aggregator 
                                                Network By Providing A Platform For Fuel Retailers To Connect With Customers And Fill The Tanks On Demand.</p>
                                                <div className='difference_tab_btn'>
                                                    <a href='#0'>Get In Touch</a>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content> */}
                                    
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
