import React from 'react'

import './OurTechnical.css'

export default function OurTechnical({data}) {
  return (
    <div className='our_technical_wrapper'>
        <div className='container'>
            <div className='our_technical_wrap'>
            {
                <>
                {console.log('sdsvdsvdsvsdvsvsdvsv', data?.conte)}
                    <div class="our_technical_title">
                        <div class="our_technical_title_block">
                            <div class="our_technical_title_conte">
                                <h2>{data?.title}</h2>
                                <p>{data?.subTtiel}</p>
                            </div>
                        </div>
                        <div class="our_technical_title_img">
                            <div class="our_technical_title_img_block">
                                <img src={data?.images} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="our_technical_block">
                        <ul> 
                            { data?.conte?.map((item, index) => (
                                <li key={index}>
                                    <div className="our_technical_sec">
                                        <div className="our_technical_img">
                                            <img src={item?.img} alt="" />
                                        </div>
                                        <div className="our_technical_conte">
                                            <h3>{item?.name}</h3>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            }
            </div>
        </div>
    </div>
  )
}
