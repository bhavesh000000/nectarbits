import React, { useEffect } from 'react'

import $ from 'jquery';

import './Contact.css'
import axios from 'axios';

import ic_skype from '../../../Assets/Images/ic_skype.webp'
import ic_email from '../../../Assets/Images/ic_email.webp'
import { useNavigate } from 'react-router-dom';

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

    const navigation = useNavigate()


    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.async = true;
        document.getElementById('script_show').appendChild(script);
        script.onload = () => {
            window.hbspt.forms.create({
                region: "na1",
                portalId: "4468075",
                formId: "68a22a5e-89aa-45c6-bb39-97c1722befc1"
            });


        };
    }, [])

    useEffect(() => {
        let id =  setTimeout(() => {
            const iframe = document.getElementsByTagName('iframe')?.[0];
            // console.log(iframe[0], 'iframe')
            if (iframe) {
                const iframeWindow = iframe.contentWindow;
                if (iframeWindow) {
                    const form = iframeWindow.document.getElementById('hsForm_68a22a5e-89aa-45c6-bb39-97c1722befc1');
                    if (form) {
                        form.addEventListener('submit', handleSubmit);
                        console.log(form, 'vshvbshvdshvsdhvbhsb')
                    }
                }
            }

        }, 1000);

        return ( ) =>{
            (clearTimeout (id) )
        }
    }, []);


    function handleSubmit(event) {
        event.preventDefault();

        navigation('/thankyou')

        // alert('jcbcsjahb')
    }




    return (
        <div>
            <div className="contact_us_wrapper">
                <div className='container'>
                    <div className='contact_us_wrap'>
                        <div className='contact_us_title'>
                            <h3>Contact Us</h3>
                            <h2>Let's Discuss your Project</h2>
                        </div>
                        <div className='contact_us_block'>
                            <div id='script_show'></div>
                        </div>
                        <div className="listening_inner_conte">
                            <div className="assistance_contact">
                                <div className="assistance_img">
                                    <img src={ic_email} alt="" />
                                </div>
                                <div className="assistance_conte">
                                    <h4>Email Us</h4>
                                    <a href="mailto:admin@nectarbits.ca">admin@nectarbits.ca</a>
                                </div>
                            </div>
                            <div className="assistance_contact">
                                <div className="assistance_img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg>
                                </div>
                                <div className="assistance_conte">
                                    <h4>Phone</h4>
                                    <a href="#0">+1 778-552-2466</a>
                                </div>
                            </div>
                            <div className="assistance_block">
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

