import React from 'react'

export default function Protficient1({data}) {
    console.log(data, "bvcshuvbcshvhkb")
  return (
    <div className='proficient_box'>
        {
            data?.hireData?.position == 'top' && 
            <div className='cm_proficient_box'>
                <h2>{data?.hireData?.title}</h2>
                <div className='cm_proficient_icon'>
                    <img src={data?.hireData?.icon} />
                </div>
            </div>
        }
        <div className='proficient_section'>
            <ul>
            {
                data?.data?.map( (item) =>{
                    return <li> 
                        <div className='proficient_inner_box'>
                            <div className='proficient_inner_bg'>
                                <h3>{item?.title}</h3>
                                <div className='proficient_icon'>
                                    <img src={item?.icon} />
                                </div>
                            </div>
                        </div>
                    </li>
                } )
            }
            </ul>
        </div>
        {
            data?.hireData?.position == 'bottom' && 
            <div className='cm_proficient_box'>
                <h2>{data?.hireData?.title}</h2>
                <div className='cm_proficient_icon'>
                    <img src={data?.hireData?.icon} />
                </div>
            </div>
        }
    </div>
  )
}
