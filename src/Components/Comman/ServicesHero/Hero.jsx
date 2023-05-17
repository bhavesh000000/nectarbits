import React from 'react'

import './Hero.css'
import { ServicesHeroData } from '../../../Immutable/ServicesHero/ServicesHero'

export default function Hero() {
  return (
    <div className='services_hero_sec'>
        <div class="banner_wrapper">
            <div class="banner_wrap">
                <div class="container ">
                    <div class="banner_block">
                        {
                            ServicesHeroData?.map( (ServicesHero) =>
                                <div class="banner_sec">
                                    <div class="banner_conte">

                                                <div class="banner_inner_conte">
                                                    <h3>{ServicesHero?.data?.title} </h3>
                                                    <h4>{ServicesHero?.data?.subTitle} </h4>
                                                    <p>{ServicesHero?.data?.conte}</p>
                                                    <div class="banner_btn">
                                                        <a href="#0">{ServicesHero?.data?.link}</a>
                                                    </div>    
                                                </div>

                                    </div>
                                    <div class="banner_img">
                                        <div class="banner_img_block">
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
