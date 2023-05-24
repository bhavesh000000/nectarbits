import React, { useState } from 'react'

import './Solutions.css';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SolutionData } from '../../../Immutable/MobileDevelopment/MobileDevelopment';

export default function Solutions() {

    var solutions_slider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    const [Solution, SetSolution] = useState("Taxi App");

  return (
    <div className="solutions_wrapper">
        <div className="solutions_wrap">
            <div className="container">
                <div className="solutions_block">
                    <div className="solutions_title">
                        <h2>Solutions We Focus On</h2>
                        <p>The Technical Mastery Of Mobile App Pros Enables Them Engineering Feature-Rich And User-Centric 
                            Mobile Apps Integrating Advanced Technologies That Serve Your 
                            Emerging Business Needs. Our Strength Lies In The Following Technologies Integration:</p>
                    </div>
                    <div className="solutions_sec">
                        <div className="solutions_tab_block">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="taxi">
                                    <div className="solutions_tabs">
                                        <div className="solutions_item">

                                        <ul className="nav nav-tabs">
                                            {
                                                SolutionData?.map((solution) => <li key={solution} className="nav-item" onClick={()=>SetSolution(solution?.data?.tabTitle)}>
                                                    <button className={`nav-link  ${solution?.data?.tabTitle == Solution && 'active'}`} >{solution?.data?.tabTitle}</button>
                                                </li>)
                                            }
                                        </ul>

                                            {/* <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="taxi">Taxi App</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="commerce">E-commerce</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="demand">On-demand Delivery</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="app">IoT App</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="application">AR Application</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="wearable">Wearable Tech App</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="tracking">Geo Tracking</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="sensor">Location sensor</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="biometric">Biometric Sensor</Nav.Link>
                                                </Nav.Item>
                                            </Nav> */}
                                        </div>
                                    </div>
                                    <div className='solutions_tab_conte'>
                                        <Tab.Content>

                                        {
                                            SolutionData.map((solution, idx) => (
                                                <div key={solution} className={`tab_pane ${Solution === solution?.data?.tabTitle ? 'tabs_active' : ''}`}>
                                                    <div className='mobile_technologies' key={idx}>
                                                        
                                                        <Slider {...solutions_slider}>
                                                            {solution?.data?.tabConte?.tabData?.map((item, index) => {
                                                                console.log(item); 
                                                                return (
                                                                    <div key={index} className="taxi_app_sec">
                                                                    <h3>{item?.title}</h3>
                                                                    <p>{item?.conte}</p>
                                                                    <div className="taxi_app_btn">
                                                                        <a href="#0">{item?.link}</a>
                                                                    </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            ))
                                            }

                                            {/* <Tab.Pane eventKey="taxi">
                                                <div>
                                                   
                                                        <div>
                                                            <div className="taxi_app_sec">
                                                                <h3>Taxi App Development</h3>
                                                                <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                                    Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                                <div className="taxi_app_btn">
                                                                    <a href="#0">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                             <div className="taxi_app_sec">
                                                                <h3>Taxi App Development</h3>
                                                                <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                                    Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                                <div className="taxi_app_btn">
                                                                    <a href="#0">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="taxi_app_sec">
                                                                <h3>Taxi App Development</h3>
                                                                <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                                    Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                                <div className="taxi_app_btn">
                                                                    <a href="#0">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="commerce">
                                                <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="demand">
                                                <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="app">
                                                <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="application">
                                                <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="wearable">
                                                <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tracking">
                                                <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sensor">
                                                 <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="biometric">
                                                <div className="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div className="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane> */}
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
