import React from 'react'

import './BusinessSolution.css'
import Business from './Business'
import { SolutionsCarData, SolutionsCommerceData, SolutionsFoodData, SolutionsFuelData, SolutionsOnDemandData, SolutionsSalonData } from '../../../Immutable/Solutions/Solutions'

export default function BusinessSolution() {
  return (
    <div className='business_solution_wrapper'>
        <div className='container'>
            <div className='business_solution_wrap'>
                <div className='business_solution_title'>
                    <h3>OUR SOLUTIONS</h3>
                </div>
                <div className='business_solution_block'>
                    <div className='cm_business_solution orange_business_solution'>
                        <Business data={SolutionsSalonData} />
                    </div>
                    <div className='cm_business_solution blue_business_solution'>
                        <Business data={SolutionsOnDemandData} />
                    </div>
                    <div className='cm_business_solution yellow_business_solution'>
                        <Business data={SolutionsFoodData} />
                    </div>
                    <div className='cm_business_solution purple_business_solution'>
                        <Business data={SolutionsCommerceData} />
                    </div>
                    <div className='cm_business_solution darkyellow_business_solution'>
                        <Business data={SolutionsFuelData} />
                    </div>
                    <div className='cm_business_solution green_business_solution'>
                        <Business data={SolutionsCarData} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
