import React from 'react'

import './Solutions.css';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Solutions() {

    var solutions_slider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div class="solutions_wrapper">
        <div class="solutions_wrap">
            <div class="container">
                <div class="solutions_block">
                    <div class="solutions_title">
                        <h2>Solutions We Focus On</h2>
                        <p>The Technical Mastery Of Mobile App Pros Enables Them Engineering Feature-Rich And User-Centric 
                            Mobile Apps Integrating Advanced Technologies That Serve Your 
                            Emerging Business Needs. Our Strength Lies In The Following Technologies Integration:</p>
                    </div>
                    <div class="solutions_sec">
                        <div class="solutions_tab_block">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="taxi">
                                    <div class="solutions_tabs">
                                        <div class="solutions_item">
                                            <Nav variant="pills" className="flex-column">
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
                                            </Nav>
                                        </div>
                                    </div>
                                    <div className='solutions_tab_conte'>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="taxi">
                                                <div>
                                                    <Slider {...solutions_slider}>
                                                        <div>
                                                            <div class="taxi_app_sec">
                                                                <h3>Taxi App Development</h3>
                                                                <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                                    Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                                <div class="taxi_app_btn">
                                                                    <a href="#0">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                             <div class="taxi_app_sec">
                                                                <h3>Taxi App Development</h3>
                                                                <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                                    Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                                <div class="taxi_app_btn">
                                                                    <a href="#0">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div class="taxi_app_sec">
                                                                <h3>Taxi App Development</h3>
                                                                <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                                    Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                                <div class="taxi_app_btn">
                                                                    <a href="#0">Learn More</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="commerce">
                                                <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="demand">
                                                <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="app">
                                                <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="application">
                                                <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="wearable">
                                                <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tracking">
                                                <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sensor">
                                                 <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="biometric">
                                                <div class="taxi_app_sec">
                                                    <h3>Taxi App Development</h3>
                                                    <p>Launch Your Own Taxi Booking Application, Called Uber, Ola, Lyft. <br /> Our 
                                                        Taxi App Solution Allows Online Payment Feature, <br /> Geolocation Tracking , Stable Working Applications With Smooth <br /> UX.</p>
                                                    <div class="taxi_app_btn">
                                                        <a href="#0">Learn More</a>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
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
