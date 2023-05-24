import React from 'react'

import './Programmers.css'
import { ProgrammersData } from '../../../Immutable/HireResourcesHero/HireResourcesHeroData'

export default function Programmers() {
  return (
    <div className='programmers_wrapper'>
        <div className='container'>
            <div className='programmers_wrap'>
                <div className='programmers_title'>
                    <div className='programmers_title_block'>
                        <h4>HOW TO</h4>
                        <h2>Intrigued? Here’s How You Can Hire IOS/ IPhone Programmers?</h2>
                        <p>The Simple And Straightforward Process Is Followed To Make The Team Of IOS Developers Get Ready To Work On Your Project.</p>
                    </div>  
                </div>
                <div className='programmers_block'>
                    <div className='programmers_box_block'>
                        <ul>
                            {
                                ProgrammersData?.data?.map( (Programmers) => (
                                <li>
                                    <div className='programmers_box'> 
                                        <div className='programmers_number_bg'>
                                            <div className='programmers_number'>
                                                <h2>{Programmers?.number}</h2>
                                            </div>
                                        </div>
                                        <div className='programmers_conte_bg'>
                                            <div className='programmers_conte'>
                                                <h3>{Programmers?.title}</h3>
                                                <p>{Programmers?.conte}</p>
                                            </div>
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
    </div>
  )
}
