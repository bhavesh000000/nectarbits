import React from 'react'

import './AppModels.css';
import { AppModelsData } from '../../../Immutable/FuleAppSolution/FuleSolutionData';

export default function AppModels() {
  return (
    <div className='app_models_wrapper'>
        <div className='container'>
            <div className='app_models_wrap'>
                <div className='app_models_title'>
                    <h3>On-demand Fuel Delivery App Models</h3>
                    <p>Whether You Are Starting Up As A Fuel Delivery Business Owner Or Already A Chain 
                    Of Fuel Stations, We Can Create A Customized Fuel Delivery App Solution For You. Our Dedicated Fuel 
                    Delivery App Programmers And Coders Can Develop The App Per Your Business Needs.</p>
                </div>
                <div className='app_models_block'>
                    <ul>

                        {
                            AppModelsData?.map((data) => 
                                <li key={data}>
                                    <div className='app_models_box'>
                                        <div>
                                            <img src={data?.images} alt=""  />
                                            <h3>{data?.title}</h3>
                                            <p>{data?.conte}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
