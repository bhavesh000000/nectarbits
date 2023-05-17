import React, { useState } from 'react';

import './Header.css';

import logo from '../../../Assets/Images/logo.png';

import { headerData, productsData } from '../../../Immutable/Home/homeData';
import { NavLink } from "react-router-dom";



export default function Header() {

    const [services, setServices] = useState("Mobile App");
    const [products, setProducts] = useState("E-Commerce Solution");

    const [addServices, setAddServices] = useState("");
    const [addProduct, setAddProduct] = useState("");

    const [active, setActive] = useState()
    const toggleclass = () => {
        setActive(!active);
        document.documentElement.classList.toggle("cm_overflow");
    }

    const open_header_data = (idx) =>{
        setAddServices(idx);
    }

    const open_header_data2 = (idx) =>{
        setAddProduct(idx);
    }

    const services_mega_open = () =>{
        document.documentElement.classList.toggle("open_mega1");
        document.documentElement.classList.remove("open_mega3");
        document.documentElement.classList.remove("open_mega2");
        setAddServices(null);
    }


    const product_mega_open = () =>{
        document.documentElement.classList.toggle("open_mega2");
        document.documentElement.classList.remove("open_mega1");
        document.documentElement.classList.remove("open_mega3");

        setAddServices(null);
    }

    const company_mega_open = () =>{
        document.documentElement.classList.toggle("open_mega3");
        document.documentElement.classList.remove("open_mega1");
        document.documentElement.classList.remove("open_mega2");


        setAddServices(null);
    }

    // const headerToggle = () =>{
    //     document.getElementById('services_mega_id').style.display = "none"

    // }



    return (
        <div className="header_wrapper">
            <div className="container">
                <header className={`header_wrap ${(active ? 'open_menu' : '')}`}>
                    <div className="logo_wrap">
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="menu_wrap">
                        <ul className="menu_block">
                            <li><a className="services" onClick={services_mega_open} href="javascript:void(0);">Services</a>
                                <div className="services_mega" id="services_mega_id">

                                    <div className="services_mega_menu">
                                        <div className="services_first_menu border_right">
                                            <ul className="nav nav-tabs  d-lg-flex">
                                                {
                                                    headerData?.map((header) => <li key={header} className="nav-item" onClick={()=>setServices(header?.title)}>
                                                        <button className={`nav-link  ${header?.title == services && 'active'}`} >{header?.title}</button>
                                                    </li>)
                                                }
                                            </ul>
                                        </div>
                                        <div className="services_center_menu border_right">
                                            <div className="tab-content">
                                                {
                                                    headerData?.map((header,idx) => <div key={header} className= {`tab_pane ${ addServices==idx ? 'tabs_active' : ''  } `}>
                                                        <h2 className="accordion-header" onClick={ () => open_header_data(idx) }>
                                                            <button className="accordion-button">{header?.data?.title}</button>
                                                        </h2>
                                                        <div className={`accordion-collapse ${header?.title == services && 'active'} accordion-item`}>
                                                            <div className="accordion-body">
                                                                <div className="app_menu_block">
                                                                    <ul>
                                                                        {
                                                                            header?.data?.data?.map((subData) => 
                                                                                <li key={header}>
                                                                                    <NavLink to={subData.path} >{subData.name}</NavLink>
                                                                                </li>
                                                                            )
                                                                        }         
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                }

                                                {/* <div className="tab-pane accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button">
                                                            Managed Services
                                                        </button>
                                                    </h2>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            <div className="app_menu_block">
                                                                <ul>
                                                                    <li><a href="#0">React Native Development</a></li>
                                                                    <li><a href="#0">Flutter App Development</a></li>
                                                                    <li><a href="#0">iPhone App Development</a></li>
                                                                    <li><a href="#0">Android App Development</a></li>
                                                                    <li><a href="#0">iPad App Development</a></li>
                                                                    <li><a href="#0">Swift App Development</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button">
                                                            Web Development
                                                        </button>
                                                    </h2>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            <div className="app_menu_block">
                                                                <ul>
                                                                    <li><a href="#0">React Native Development</a></li>
                                                                    <li><a href="#0">Flutter App Development</a></li>
                                                                    <li><a href="#0">iPhone App Development</a></li>
                                                                    <li><a href="#0">Android App Development</a></li>
                                                                    <li><a href="#0">iPad App Development</a></li>
                                                                    <li><a href="#0">Swift App Development</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button" type="button">
                                                            Hire Developer
                                                        </button>
                                                    </h2>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            <div className="app_menu_block">
                                                                <ul>
                                                                    <li><a href="#0">React Native Development</a></li>
                                                                    <li><a href="#0">Flutter App Development</a></li>
                                                                    <li><a href="#0">iPhone App Development</a></li>
                                                                    <li><a href="#0">Android App Development</a></li>
                                                                    <li><a href="#0">iPad App Development</a></li>
                                                                    <li><a href="#0">Swift App Development</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="services_last_menu">
                                            <div className="workshop_wrap">
                                                <div className="workshop_block">
                                                    <h3>Discovery <br /> Workshop</h3>
                                                    <p>Define Functional Scope of your project to plan project budget and timeline</p>
                                                    <div className="workshop_btn">
                                                        <a href="#0">Schedule Meeting</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="javascript:void(0);" className="company" onClick={company_mega_open}>Company</a>
                                <div className="company_mega">
                                    <div className="company_mega_block">
                                        <div className="company_left border_right">
                                            <ul>
                                                <li><a href="#0">Awards & Certifications</a></li>
                                                <li><NavLink to='/contactus'>Process</NavLink></li>
                                                <li><a href="#0">Team & Culture</a></li>
                                                <li><a href="#0">Blog</a></li>
                                                <li><a href="#0">Career</a></li>
                                            </ul>
                                        </div>
                                        <div className="services_last_menu">
                                            <div className="workshop_wrap">
                                                <div className="workshop_block">
                                                    <h3>Let’s start a new project Together!</h3>
                                                    <div className="workshop_btn">
                                                        <a href="#0">Schedule Meeting</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a className="products" onClick={product_mega_open} href="javascript:void(0);">Products</a>
                                <div className="products_mega">
                                    <div className="services_mega_menu products_mega_menu">



                                        <div className="services_first_menu border_right">
                                            <ul className="nav nav-tabs">

                                                {
                                                    productsData?.map((product) => <li key={product} className="nav-item" onClick={()=>setProducts(product?.tabData?.tabTitle)}>
                                                        <button className={`nav-link  ${product?.tabData?.tabTitle == products && 'active'}`} >
                                                            <div className="products_nav">
                                                                <div className="commerce_img">
                                                                    <img src={product?.tabData?.tabImage} alt="" />
                                                                </div>
                                                                <h3>{product?.tabData?.tabTitle}</h3>
                                                                <p>{product?.tabData?.subTitle}</p>
                                                            </div>
                                                        </button>
                                                    </li>)
                                                }

                                                {/* <li className="nav-item">
                                                    <button className="nav-link active">
                                                        <div className="products_nav">
                                                            <div className="commerce_img">
                                                                <img src={products_ic1} alt="" />
                                                            </div>
                                                            <h3>E-Commerce Solution</h3>
                                                            <p>Multi-Vendor eCommerce Platform</p>
                                                        </div>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link">
                                                        <div className="products_nav">
                                                            <div className="commerce_img">
                                                                <img src={products_ic2} alt="" />
                                                            </div>
                                                            <h3>Service Marketplace</h3>
                                                            <p>Multi-Vendor eCommerce Platform</p>
                                                        </div>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link">
                                                        <div className="products_nav">
                                                            <div className="commerce_img">
                                                                <img src={products_ic3} alt="" />
                                                            </div>
                                                            <h3>Dating App Solution</h3>
                                                            <p>Multi-Vendor eCommerce Platform</p>
                                                        </div>
                                                    </button>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link">
                                                        <div className="products_nav">
                                                            <div className="commerce_img">
                                                                <img src={products_ic4} alt="" />
                                                            </div>
                                                            <h3>Fuel Delivery App</h3>
                                                            <p>Multi-Vendor eCommerce Platform</p>
                                                        </div>
                                                    </button>
                                                </li> */}
                                            </ul>
                                        </div>
                                        <div className="services_center_menu products_center_menu border_right">
                                            <div className="tab-content accordion">


                                                <div className="tab-pane ">

                                                {
                                                    productsData?.map((product,idx) => <div key={product} className= {`tab_pane ${ addProduct==idx ? 'tabs_active' : ''  } `}>
                                                        <h2 className="accordion-header" onClick={ () => open_header_data2(idx) }>
                                                            <button className="accordion-button">
                                                                <div className="commerce_img">
                                                                    <img src={product?.tabData?.tabImage} alt="" />
                                                                </div>
                                                                <h3 className='commerce_sub_title'>{product?.tabData?.tabTitle}</h3>
                                                                <p className='commerce_p_title'>{product?.tabData?.subTitle}</p>
                                                            </button>
                                                        </h2>
                                                        <div className={`accordion-collapse ${product?.tabData?.tabTitle == products && 'active'} accordion-item`}>
                                                            <div className="accordion-body">
                                                                <div className="app_menu_block">
                                                                    {
                                                                         <h2>{product?.tabData?.accData?.title}</h2>
                                                                    }
                                                                    <ul>
                                                                        {
                                                                            product?.tabData?.accData?.data?.map((subData) => <li key={product}><a href="#0">{subData}</a></li>
                                                                            )
                                                                        }         
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                }

                                                    {/* <h2 className="accordion-header" >
                                                        <button className="accordion-button">
                                                            <div className="products_nav">
                                                                <div className="commerce_img">
                                                                    <img src={products_ic2} alt="" />
                                                                </div>
                                                                <h3>E-Commerce Solution</h3>
                                                                <p>Multi-Vendor eCommerce Platform</p>
                                                            </div>
                                                        </button>
                                                    </h2>
                                                    <div className="accordion-collapse active">
                                                        <div className="accordion-body">
                                                            <div className="app_menu_block">
                                                                <h2>Use Cases</h2>
                                                                <ul>
                                                                    <li><a href="#0">Salon Booking App</a></li>
                                                                    <li><a href="#0">Car Wash App</a></li>
                                                                    <li><a href="#0">Home Service App</a></li>
                                                                    <li><a href="#0">Pharmacy Delivery App</a></li>
                                                                    <li><a href="#0">Taxi Booking App</a></li>
                                                                    <li><a href="#0">Laundry Booking App</a></li>
                                                                    <li><a href="#0">Electric Vehicle Charging App</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> */}

                                                </div>
                                                {/* <div className="tab-pane " >
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button" >
                                                            <div className="products_nav">
                                                                <div className="commerce_img">
                                                                    <img src={products_ic3} alt="" />
                                                                </div>
                                                                <h3>Service Marketplace</h3>
                                                                <p>Multi-Vendor eCommerce Platform</p>
                                                            </div>
                                                        </button>
                                                    </h2>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            <div className="app_menu_block">
                                                                <h2>Use Cases</h2>
                                                                <ul>
                                                                    <li><a href="#0">Salon Booking App</a></li>
                                                                    <li><a href="#0">Car Wash App</a></li>
                                                                    <li><a href="#0">Home Service App</a></li>
                                                                    <li><a href="#0">Pharmacy Delivery App</a></li>
                                                                    <li><a href="#0">Taxi Booking App</a></li>
                                                                    <li><a href="#0">Laundry Booking App</a></li>
                                                                    <li><a href="#0">Electric Vehicle Charging App</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane ">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button">
                                                            <div className="products_nav">
                                                                <div className="commerce_img">
                                                                    <img src="../../Assets/images/products_ic3.png" alt="" />
                                                                </div>
                                                                <h3>Dating App Solution</h3>
                                                                <p>Multi-Vendor eCommerce Platform</p>
                                                            </div>
                                                        </button>
                                                    </h2>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            <div className="app_menu_block">
                                                                <h2>Use Cases</h2>
                                                                <ul>
                                                                    <li><a href="#0">Salon Booking App</a></li>
                                                                    <li><a href="#0">Car Wash App</a></li>
                                                                    <li><a href="#0">Home Service App</a></li>
                                                                    <li><a href="#0">Pharmacy Delivery App</a></li>
                                                                    <li><a href="#0">Taxi Booking App</a></li>
                                                                    <li><a href="#0">Laundry Booking App</a></li>
                                                                    <li><a href="#0">Electric Vehicle Charging App</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane ">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button">
                                                            <div className="products_nav">
                                                                <div className="commerce_img">
                                                                    <img src={products_ic4} alt="" />
                                                                </div>
                                                                <h3>Fuel Delivery App</h3>
                                                                <p>Multi-Vendor eCommerce Platform</p>
                                                            </div>
                                                        </button>
                                                    </h2>
                                                    <div className="accordion-collapse">
                                                        <div className="accordion-body">
                                                            <div className="app_menu_block">
                                                                <h2>Use Cases</h2>
                                                                <ul>
                                                                    <li><a href="#0">Salon Booking App</a></li>
                                                                    <li><a href="#0">Car Wash App</a></li>
                                                                    <li><a href="#0">Home Service App</a></li>
                                                                    <li><a href="#0">Pharmacy Delivery App</a></li>
                                                                    <li><a href="#0">Taxi Booking App</a></li>
                                                                    <li><a href="#0">Laundry Booking App</a></li>
                                                                    <li><a href="#0">Electric Vehicle Charging App</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>





                                        <div className="services_last_menu products_last_menu">
                                            <div className="workshop_wrap">
                                                <div className="workshop_block">
                                                    <h3>Hire Dedicated <br /> Developer or Team</h3>
                                                    <p>Connect With Us To Discuss Your Projects, Ideas And Concept, We Would Love To Give You A No Hesitate Free Quote For Bringing Your Need To Reality</p>
                                                    <div className="workshop_btn">
                                                        <a href="#0">Schedule Meeting</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li><a href="#0" >Portfolio</a></li> */}
                            <li><NavLink to='/fulesolution'>Portfolio</NavLink></li>
                            <div className="header_btn mobile_header_btn">
                                <a className="button" href="#"><span>Enquire Now</span></a>
                            </div>
                        </ul>
                        <div className="header_btn">
                            <a className="button" href="#"><span>Enquire Now</span></a>
                        </div>
                        <div onClick={toggleclass} className="menu_toggle_btn">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}
