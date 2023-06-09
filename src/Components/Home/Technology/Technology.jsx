import React from 'react';

import './Technology.css';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import technology_mobie_img1 from '../../../Assets/Images/ic_objective_c.webp'
import technology_mobie_img2 from '../../../Assets/Images/swift.webp'
import technology_mobie_img3 from '../../../Assets/Images/flutter.webp'
import technology_mobie_img4 from '../../../Assets/Images/react.webp'

import technology_web_img1 from '../../../Assets/Images/php.webp'
import technology_web_img2 from '../../../Assets/Images/laravel.webp'
import technology_web_img3 from '../../../Assets/Images/nodejs.webp'
import technology_web_img4 from '../../../Assets/Images/angular.webp'
import technology_web_img5 from '../../../Assets/Images/reactjs.webp'
import technology_web_img6 from '../../../Assets/Images/html5.webp'
import technology_web_img7 from '../../../Assets/Images/vuejs.webp'

import technology_cluod_img1 from '../../../Assets/Images/aws.webp'
import technology_cluod_img2 from '../../../Assets/Images/microsoft.webp'
import technology_cluod_img3 from '../../../Assets/Images/google_cloud.webp'
import technology_cluod_img4 from '../../../Assets/Images/digital_ocean.webp'
import technology_cluod_img5 from '../../../Assets/Images/technology_cluod_img1.webp'

import technology_data_img1 from '../../../Assets/Images/mysql.webp'
import technology_data_img2 from '../../../Assets/Images/postgreql.webp'
import technology_data_img3 from '../../../Assets/Images/mango_db.webp'

import technology_ui_ux_img1 from '../../../Assets/Images/sketch.webp'
import technology_ui_ux_img2 from '../../../Assets/Images/figma.webp'
import technology_ui_ux_img3 from '../../../Assets/Images/adobe_xd.webp'
import technology_ui_ux_img4 from '../../../Assets/Images/zeplin.webp'
import technology_ui_ux_img5 from '../../../Assets/Images/affinity_photo.webp'
import technology_ui_ux_img6 from '../../../Assets/Images/affinity_designer.webp'


export default function Technology() {
  return (
    <div className="technology_wrapper">
        <div className="container">
        <div className="technology_wrap">
            <div className="technology_title">
                <p>Technology Stack</p>
                <h3>How Software Development Company
                    Can Help You</h3>
            </div>
            <div className="technology_block">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className="technology_sec">
                        <div className="technology_item">
                            <div className="technology_item_block">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Mobile Technology</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Web Technology</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three">Cloud</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="for">Database</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">UI/UX Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </div>
                        </div>
                        <div className="technology_conte">
                            <div className="technology_conte_block">
                                <div className="tab-content" id="v-pills-tabContent">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="technology_tabs_block">
                                            <ul>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img"> 
                                                            <img src={technology_mobie_img1} alt="" />
                                                        </div>
                                                        <p>Objective C</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img className="figma" src={technology_mobie_img2} alt="" />
                                                        </div>
                                                        <p>Swift</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_mobie_img3} alt="" />
                                                        </div>
                                                        <p>Flutter</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_mobie_img4} alt="" />
                                                        </div>
                                                        <p>React Native</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="technology_tabs_block">
                                            <ul>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_web_img1} alt="" />
                                                        </div>
                                                        <p>PHP</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img className="figma" src={technology_web_img2} alt="" />
                                                        </div>
                                                        <p>Laravel</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_web_img3} alt="" />
                                                        </div>
                                                        <p>Node.JS</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_web_img4} alt="" />
                                                        </div>
                                                        <p>Angular</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_web_img5} alt="" />
                                                        </div>
                                                        <p>HTML 5</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_web_img6} alt="" />
                                                        </div>
                                                        <p>React.JS</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_web_img7} alt="" />
                                                        </div>
                                                        <p>Vue JS</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        <div className="technology_tabs_block">
                                            <ul>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_cluod_img1} alt="" />
                                                        </div>
                                                        <p>Amazon AWS</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img className="figma" src={technology_cluod_img2} alt="" />
                                                        </div>
                                                        <p>Microsoft</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_cluod_img3} alt="" />
                                                        </div>
                                                        <p>Google Cloud</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_cluod_img4} alt="" />
                                                        </div>
                                                        <p>Digital Ocean</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_cluod_img5} alt="" />
                                                        </div>
                                                        <p>Firebase</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="for">
                                        <div className="technology_tabs_block">
                                            <ul>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_data_img1} alt="" />
                                                        </div>
                                                        <p>MySQl</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img className="figma" src={technology_data_img2} alt="" />
                                                        </div>
                                                        <p>PostgreSQL</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_data_img3} alt="" />
                                                        </div>
                                                        <p>Mongo DB</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                    <div className="technology_tabs_block">
                                            <ul>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_ui_ux_img1} alt="" />
                                                        </div>
                                                        <p>Sketch</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img className="figma" src={technology_ui_ux_img2} alt="" />
                                                        </div>
                                                        <p>Figma</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_ui_ux_img3} alt="" />
                                                        </div>
                                                        <p>Adobe XD</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_ui_ux_img4} alt="" />
                                                        </div>
                                                        <p>Zeplin</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_ui_ux_img5} alt="" />
                                                        </div>
                                                        <p>Affinity Photo</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#0" className="technology_tabs_conte">
                                                        <div className="technology_img">
                                                            <img src={technology_ui_ux_img6} alt="" />
                                                        </div>
                                                        <p>Affinity Designer</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </div>
    </div>
</div>
    
  )
}
