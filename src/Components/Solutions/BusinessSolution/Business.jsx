import React, { useState } from 'react'

export default function Business({data}) {

    const [solutions, setSolutions] = useState("App");

  return (
    <div className='business_solution_sec'>
        {console.log( data?.data, 1231232132132 )}
        {
            <div className='business_bg' style={{ backgroundImage: `url(${data?.data?.bgImage})` }}>
                <div className='business_block'>
                    <div className='business_sec'>
                        <div className='business_conte'>
                            <ul>
                                {
                                    data?.data?.tabData?.map((solution) => <li key={solution} className="nav_item" onClick={() => setSolutions(solution?.tabTitle)}>
                                        <button className={`nav_link  ${solution?.tabTitle == solutions && 'active'}`} >{solution?.tabTitle}</button>
                                    </li>)
                                }
                            </ul>
                            {
                                <div className='business_info'>
                                    <h3>{data?.data?.mainConte?.title}</h3>
                                    <p>{data?.data?.mainConte?.conte}</p>
                                    <div className='business_link'>
                                        <a href='#0'> {data?.data?.mainConte?.link} <span> <img src={data?.data?.mainConte?.linkIcon} /> </span>  </a>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='business_tab_conte'>
                        <div className="business_tab_body">
                            {
                                data?.data?.tabData?.map((solution) => 
                                    <div className={`accordion_collapse ${solution?.tabTitle == solutions && 'active'}`}>
                                            <div className="business_tab_block">
                                                <div className='business_tab_img'>
                                                    <img src={solution?.images} />
                                                </div>
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}
