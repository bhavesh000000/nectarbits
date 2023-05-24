import React from 'react'

import './Libraries.css'

export default function Libraries({data}) {
    console.log(data?.conteData)
  return (


    <div class="libraries_wrapper">
       {
            <div class="libraries_wrap" style={{ backgroundImage: `url(${data?.bg_images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div class="container">
                <div class="libraries_block">
                <div class="libraries_title">
                    <h3>{data?.title}</h3>
                </div>
                <div class="libraries_img_block">
                    <ul>
                    {data?.conteData?.map((libraryItem, index) => {
                        return (
                        <li key={index}>
                            <a href="#0" class="libraries_img_sec" style={{ backgroundImage: `url(${libraryItem?.images})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <div class="libraries_img">
                                <img src={libraryItem?.ap_icon} alt="" />
                            </div>
                            <div class="libraries_conte">
                                <p>{libraryItem?.subTitle}</p>
                                <span>{libraryItem?.innerTitle}</span>
                            </div>
                            </a>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                <div class="libraries_btn">
                    <a href="#0">{data?.link}</a>
                </div>
                </div>
            </div>
            </div>
  
        }
    </div>


  )
}
