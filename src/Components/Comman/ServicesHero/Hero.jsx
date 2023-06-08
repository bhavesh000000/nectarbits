import React from 'react'

import './Hero.css'
import { NavLink } from 'react-router-dom'

export default function Hero({data}) {
  return (
    <div className='services_hero_sec'>
        <div className="banner_wrapper">
            <div className="banner_wrap">
                <div className="container ">
                    <div className="banner_block">
                        {
                            data?.map( (ServicesHero) =>
                                <div className="banner_sec">
                                    <div className="banner_conte">

                                                <div className="banner_inner_conte">
                                                    <h3>{ServicesHero?.data?.title} </h3>
                                                    <h4>{ServicesHero?.data?.subTitle} </h4>
                                                    <p>{ServicesHero?.data?.conte}</p>
                                                    <div className="banner_btn">
                                                        <NavLink to="/contactus">{ServicesHero?.data?.link}</NavLink>
                                                    </div>    
                                                </div>

                                    </div>
                                    <div className="banner_img">
                                        <div className="banner_img_block">
                                            <img src={ServicesHero?.data?.images} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
