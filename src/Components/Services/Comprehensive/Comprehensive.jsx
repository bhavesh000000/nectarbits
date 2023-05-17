import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import './Comprehensive.css';

import link_arrow from '../../../Assets/Images/Services/link_arrow.png'
import App_Mockup from '../../../Assets/Images/Services/App_Mockup.png'

export default function Comprehensive() {
  return (
    <div class="comprehensive_wrapper">
        <div class="container">
            <div class="comprehensive_wrap">
                <div class="comprehensive_title">
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
                    <div class="comprehensive_block">
                        <div class="comprehensive_sec">
                            <div class="comprehensive_nav_tabs">
                                <ul class="nav nav-tabs">
                                    <Nav variant="pills" >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Strategy</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">App Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="three">Website Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="for">Support & Maintenance</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </ul>
                            </div>
                            <div class="comprehensive_tab_content">

                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
                                                    <img src={App_Mockup} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
                                                    <img src={App_Mockup} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
                                                    <img src={App_Mockup} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="for">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src={link_arrow} alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
                                                    <img src={App_Mockup} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>

                                    {/* <div class="tab-pane fade show active" id="strategy" role="tabpanel" aria-labelledby="strategy-tab">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
                                                    <img src="../../../Assets/images/Services/App_Mockup.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="development" role="tabpanel" aria-labelledby="development-tab">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
                                                    <img src="../../../Assets/images/Services/App_Mockup.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="website" role="tabpanel" aria-labelledby="website-tab">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
                                                    <img src="../../../Assets/images/Services/App_Mockup.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="maintenance" role="tabpanel" aria-labelledby="maintenance-tab">
                                        <div class="app_development">
                                            <div class="app_development_left">
                                                <div class="app_development_conte">
                                                    <h2>App <br /> Development</h2>
                                                    <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda obcaecati et 
                                                        nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
                                                    <div class="app_development_btn">
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
                                                    <div class="app_development_link">
                                                        <a href="#0">See all Mobile app Services <span><img src="../../../Assets/images/Services/link_arrow.png" alt="" /></span> </a>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div class="app_development_right">
                                                <div class="app_development_img">
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
