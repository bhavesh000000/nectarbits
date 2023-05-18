import React from 'react'

import './WhyChooseUs.css';

import why_chooseus_img1 from '../../../Assets/Images/Services/why_chooseus_img1.webp'
import why_chooseus_img2 from '../../../Assets/Images/Services/why_chooseus_img2.webp'
import why_chooseus_img3 from '../../../Assets/Images/Services/why_chooseus_img3.webp'

export default function WhyChooseUs() {
  return (
    <div class="why_chooseus_wrapper">
    <div class="container">
        <div class="why_chooseus_wrap">
           <div class="why_chooseus_title">
                <h3>Why Choose Us</h3>
                <p>Lorem ipsum dolor sit amet. Aut repellendus impedit aut deleniti porro est assumenda
                     obcaecati et nulla molestiae? Quo magni nihil eos obcaecati nihil id voluptatibus Quis aut porro maiores. </p>
           </div>
           <div class="why_chooseus_block">
               <ul> 
                    <li>
                        <div class="why_chooseus_sec">
                            <div class="why_chooseus_img">
                                <img src={why_chooseus_img1} alt="" />
                            </div>
                            <h3>6 Months Free Support</h3>
                        </div>
                    </li>
                    <li>
                        <div class="why_chooseus_sec">
                            <div class="why_chooseus_img">
                                <img src={why_chooseus_img2} alt="" />
                            </div>
                            <h3>Low-Cost Maintenance</h3>
                        </div>
                    </li>
                    <li>
                        <div class="why_chooseus_sec">
                            <div class="why_chooseus_img">
                                <img src={why_chooseus_img3} alt="" />
                            </div>
                            <h3>Affordable</h3>
                        </div>
                    </li>
               </ul>
           </div>
        </div>
    </div>
</div>
  )
}
