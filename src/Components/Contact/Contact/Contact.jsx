import React, { useEffect } from 'react'

import $ from 'jquery';

import './Contact.css'
import axios from 'axios';

import ic_skype from '../../../Assets/Images/ic_skype.webp'
import ic_email from '../../../Assets/Images/ic_email.webp'

export default function Contact() {

//   useEffect(() => {
//     axios.get('https://nectarbits.myfreshworks.com/crm/sales/web_forms/8ebad7696c15e84b2cd86cadc815be99c788c22f9fd395c207c4955907632db2/form.js').then((res) => {
//         const script = document.createElement('script')
//         script.innerHTML = res?.data
//         document.getElementById('script_show').appendChild(script)
//         console.log((res.data), 'form')
//     })
//     return () => {
//     }
// }, [])

useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/shell.js";
    script.async = true;
    document.getElementById('script_show').appendChild(script);
    script.onload = () => {
        window.hbspt.forms.create({
            portalId: "4468075",
            formId: "26b24fe2-667f-4c55-a24b-09cf6cbaef2d"
        });
    };
}, [])

  return (
    <div>
        <div class="contact_us_wrapper">
            <div className='container'>
                <div className='contact_us_wrap'>
                    <div className='contact_us_title'>
                        <h3>Contact Us</h3>
                        <h2>Say hello and tell us your Queries; We <br /> are Listening</h2>
                    </div>
                    <div className='contact_us_block'>
                        <div id='script_show'></div>
                    </div>
                      <div class="listening_inner_conte">
                        <div class="assistance_contact">
                              <div class="assistance_img">
                                  <img src={ic_email} alt="" />
                              </div>
                              <div class="assistance_conte">
                                  <h4>Email Us</h4>
                                  <a href="mailto:admin@nectarbits.ca">admin@nectarbits.ca</a>
                              </div>
                          </div>
                          <div class="assistance_contact">
                              <div class="assistance_img">
                                  <img src={ic_skype} alt="" />
                              </div>
                              <div class="assistance_conte">
                                  <h4>HR Email</h4>
                                  <a href="#0">hr.nectarbits@gmail.com</a>
                              </div>
                          </div>
                          <div class="assistance_block">
                              <h3>What you will get:</h3>
                              <p>On-call inquiry assistance</p>
                              <p>Project consulting by experts</p>
                              <p>Detailed project estimation</p>
                          </div>
                      </div>
                </div>
            </div>

        </div>
    </div>
  )
}

