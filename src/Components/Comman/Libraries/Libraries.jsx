import React from 'react'

import './Libraries.css'
import { NavLink } from 'react-router-dom';

export default function Libraries({data}) {
    console.log(data?.conteData)
  return (


    <div className="libraries_wrapper">
       {
            <div className="libraries_wrap" style={{ backgroundImage: `url(${data?.bg_images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="libraries_block">
                <div className="libraries_title">
                    <h3>{data?.title}</h3>
                </div>
                <div className="libraries_img_block">
                    <ul>
                    {data?.conteData?.map((libraryItem, index) => {
                        return (
                        <li key={index}>
                            <a href="#0" className="libraries_img_sec" style={{ backgroundImage: `url(${libraryItem?.images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <div className="libraries_img">
                                <img src={libraryItem?.ap_icon} alt="" />
                            </div>
                            <div className="libraries_conte">
                                <p>{libraryItem?.subTitle}</p>
                                <span>{libraryItem?.innerTitle}</span>
                            </div>
                            </a>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                <div className="libraries_btn">
                    <NavLink to="/contactus">{data?.link}</NavLink>
                </div>
                </div>
            </div>
            </div>
  
        }
    </div>


  )
}
