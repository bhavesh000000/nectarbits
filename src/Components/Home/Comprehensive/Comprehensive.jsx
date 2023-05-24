import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import './Comprehensive.css';

import link_arrow from '../../../Assets/Images/Services/link_arrow.webp'
import App_Mockup from '../../../Assets/Images/Services/App_Mockup.webp'
import illustration_ui_ux_design from '../../../Assets/Images/Services/illustration_ui_ux_design.webp'
import illustration_web_design from '../../../Assets/Images/Services/illustration_web_design.webp'
import illustration_web_development from '../../../Assets/Images/Services/illustration_web_development.webp'

export default function Comprehensive() {
  return (
    <div className="comprehensive_wrapper">
        <div className="container">
            <div className="comprehensive_wrap">
                <div className="comprehensive_title">
                    <h2>The Comprehensive List Of Services</h2>
                    <p>
                        Our Round The Clock Support For Web & App Development Services Aren't Just Ensuring Timely Completion Of The 
                        Project, But Gives Our Clients A Great Experience To Work With A Team That Truly Understand Their Needs And Shares
                         The Passion To Create A Truly Remarkable Solution.
                    </p>
                    <p>
                        Our Experts Are Skilled At ‘Hand Coding’ And Don’t Rely On Applications To Make Our Design And Development 
                        Codes And We Implement Performance Best Practices To Keep The Best User Experience And Market-Leading Products.
                    </p>
                </div>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="comprehensive_block">
                        <div className="comprehensive_sec">
                            <div className="comprehensive_nav_tabs">
                                <ul className="nav nav-tabs">
                                    <Nav variant="pills" >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">App Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Website Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="three">UI/UX Design</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="for">Web Design</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </ul>
                            </div>
                            <div className="comprehensive_tab_content">

                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">Android</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">iOS</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Wearable</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src={App_Mockup} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>website <br /> development</h2>
                                                    <p>We offer Best-in-Class Cross Platform User-Friendly web development Development Service. Call to our expert and get your business online with beautiful Android & IOS App. </p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">PHP</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Laravel</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Maintenance</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src={ illustration_web_development} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>ui ux</h2>
                                                    <p>The Designer Crew Craft Elegant, High-Quality And Responsive Designs That Deliver Groundbreaking UX Irrespective Of The Device Type And Size. </p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">UI Design</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Motion Design</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Interaction</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src={illustration_web_design} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="for">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>web design</h2>
                                                    <p>The Designer Crew Craft Elegant, High-Quality And Responsive Designs That Deliver Groundbreaking UX Irrespective Of The Device Type And Size.</p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">Website Design</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">iOS</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Wearable</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src={illustration_ui_ux_design} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>

                                    {/* <div className="tab-pane fade show active" id="strategy" role="tabpanel" aria-labelledby="strategy-tab">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">Android</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">iOS</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Wearable</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src="../../../Assets/images/Services/App_Mockup.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="development" role="tabpanel" aria-labelledby="development-tab">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">Android</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">iOS</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Wearable</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src="../../../Assets/images/Services/App_Mockup.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="website" role="tabpanel" aria-labelledby="website-tab">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">Android</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">iOS</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Wearable</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src="../../../Assets/images/Services/App_Mockup.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="maintenance" role="tabpanel" aria-labelledby="maintenance-tab">
                                        <div className="app_development">
                                            <div className="app_development_left">
                                                <div className="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div className="app_development_btn">
                                                        <div>
                                                            <a href="#0">Android</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">iOS</a>
                                                        </div>
                                                        <div>
                                                            <a href="#0">Wearable</a>
                                                        </div>
                                                    </div>
                                                    <div className="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="app_development_right">
                                                <div className="app_development_img">
                                                    <img src="../../../Assets/images/Services/App_Mockup.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </div>
    </div>
  )
}
