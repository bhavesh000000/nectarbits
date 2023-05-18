import React, { useEffect } from 'react'
import './Listening.css'

import ic_email from '../../../Assets/Images/ic_email.webp'


export default function Listening() {

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
    <div className="listening_wrapper">
        <div className="listening_wrap">
            <div className="container">
                <div className="listening_block">
                    <div className="listening_conte">
                        <div className="listening_inner_conte">
                            <h2>Say hello and tell us your Queries; We are Listening</h2>
                            <div className="assistance_block">
                                <h3>What you will get:</h3>
                                <p>On-call inquiry assistance</p>
                                <p>Project consulting by experts</p>
                                <p>Detailed project estimation</p>
                            </div>
                            {/* <div className="assistance_contact">
                                <div className="assistance_img">
                                    <img src={ic_skype} alt="" />
                                </div>
                                <div className="assistance_conte">
                                    <h4>HR Email</h4>
                                    <a href="#0">hr.nectarbits@gmail.com</a>
                                </div>
                            </div> */}
                            <div className="assistance_contact">
                                <div className="assistance_img">
                                    <img src={ic_email} alt="" />
                                </div>
                                <div className="assistance_conte">
                                    <h4>Email Us</h4>
                                    <a href="mailto:admin@nectarbits.ca">admin@nectarbits.ca</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listening_form">
                        <div className="listening_form_bg">
                            <div className="listening_form_block">
                                <div id='script_show'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
