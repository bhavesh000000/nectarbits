import React from 'react'

import './ReactCompany.css'

export default function ReactCompany(data) {
    console.log("gjgj", data?.conte)
  return (
    <div className='react_netive_wrapper'>
        <div className='container'>
            <div className='react_netive_wrap'>
                {
                    <>
                        <div className='react_netive_title'>
                            <h3>{data?.data?.title}</h3>
                        </div>
                        <div className='react_netive_sec'>
                            <div className='react_netive_block'>
                                <div className='react_netive_heading'>
                                    <h3>{data?.data?.subTtiel}</h3>
                                    <p>{data?.data?.subConte}</p>
                                </div>
                            </div>
                            <div className='react_netive_conte'>
                                <div className='react_netive_inner_conte'>
                                    <ul>
                                        {
                                            data?.data?.conte?.map((item, index) => (
                                                <li key={index}>
                                                    <div className='react_native_item'>
                                                        <h2>{item?.number}</h2>
                                                        <div>
                                                            <h4>{item?.innerTitle}</h4>
                                                            <span>{item?.conte}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    </div>
  )
}
