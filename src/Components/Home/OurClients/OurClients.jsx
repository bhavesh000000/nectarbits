import React from 'react'

import './OurClients.css';

import clients_img1 from '../../../Assets/Images/clients_img1.webp';
import clients_img2 from '../../../Assets/Images/clients_img2.webp';
import clients_img3 from '../../../Assets/Images/clients_img3.webp';
import clients_img4 from '../../../Assets/Images/clients_img4.webp';
import clients_img5 from '../../../Assets/Images/clients_img5.webp';
import clients_img6 from '../../../Assets/Images/clients_img6.webp';
import clients_img7 from '../../../Assets/Images/clients_img7.webp';

export default function OurClients() {
  return (
    <div className="clients_wrapper">
    <div className="container">
        <div className="clients_wrap">
            <div className="clients_title">
                <p>Our Clients</p>
                <h2>We Collaborate with Clients to Build the Future of Digital.</h2>
            </div>
            <div className="clients_block">
                <ul>
                    <li>
                        <div className="clients_img">
                            <a href="#0">
                                <img src={clients_img1} alt="clients_img" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="clients_img">
                            <a href="#0">
                                <img src={clients_img2} alt="clients_img" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="clients_img">
                            <a href="#0">
                                <img src={clients_img3} alt="clients_img" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="clients_img">
                            <a href="#0">
                                <img src={clients_img4} alt="clients_img" />
                            </a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className="clients_img">
                            <a href="#0">
                                <img src={clients_img5} alt="clients_img" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="clients_img">
                            <a href="#0">
                                <img src={clients_img6} alt="clients_img" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="clients_img">
                            <a href="#0">
                                <img src={clients_img7} alt="clients_img" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="clients_img">
                           {/* <img src="Assets/images/clients_img.png" alt="clients_img">  */}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
