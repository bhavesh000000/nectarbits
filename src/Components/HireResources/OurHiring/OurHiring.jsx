import React from 'react'

import './OurHiring.css'
import { OurHiringData } from '../../../Immutable/HireResourcesHero/HireResourcesHeroData'



export default function OurHiring() {
  return (
    <div className='our_hiring_wrapper'>
        <div className='container'>
            <div className='our_hiring_wrap'>
                <div className='our_hiring_title'>
                    <h3>Our Hiring Models</h3>
                    <p>You Can Hire IOS Developers On A Monthly, Part-Time, Hourly, Or Fixed-Cost Basis.</p>
                </div>
                <div className='our_hiring_block'>

                {OurHiringData.data.map((item, index) => (
                    <div className=' our_hiring_box'>
                        <div className=' our_hiring_bg'>
                            <div key={index} className='our_hiring_inner_box'>
                                <div className='our_hiring_inner_title'>
                                    <h3>{item.title}</h3>
                                    <h5>{item.subTitle}<span>{item.innerTitle}</span></h5>
                                </div>
                                <ul className='our_hiring_list'>
                                    {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex}>
                                        <h4>{listItem.subTitle}</h4>
                                        <p>{listItem.conte}</p>
                                    </li>
                                    ))}
                                </ul>
                                <div className='our_hiring_btn'>
                                    <a href='#0'>{item.link}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='our_hiring_item'>
                    <ul>

                        {
                            OurHiringData?.data2?.map( (item, index) =>(

                                <li key={index}>
                                    <div className='our_hiring_item_block'>
                                        <span className='our_hiring_icon'>
                                            <img src={item?.images} />
                                        </span>
                                        <div>
                                            <h3>{item?.title}</h3>
                                            <p>{item?.conte}</p>
                                        </div>
                                    </div>
                                </li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
