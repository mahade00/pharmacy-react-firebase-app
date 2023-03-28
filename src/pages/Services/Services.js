import React from 'react';
import './Services.css';
import Service1 from '../images/services/service1.jpg';
import Service2 from '../images/services/service2.jpeg';
import Service3 from '../images/services/service3.jpg';
import Service4 from '../images/services/service4.jpg';


const Services = () => {
    return (
         <div className='services-main'>
            <h2>Our Services</h2>
            <div className='services'>
                <div className='services-each'> 
                    <img src={Service1} />
                    <h4>COVID Wellness</h4>
                    <p>The COVID-19 pandemic has induced social isolation, fear, uncertainty, anxiety, and economic hardship, causing a lot of mental stress globally, which could lead to a global mental health crisis, according to a recent United Nations (UN) report.</p>
                </div>
                <div className='services-each'>
                    <img src={Service2} />
                    <h4>Sugar Test</h4>
                    <p>A fasting blood sugar level of 99 mg/dL or lower is normal, 100 to 125 mg/dL indicates you have prediabetes, and 126 mg/dL or higher indicates you have diabetes.</p>
                </div>
                <div className='services-each'>
                    <img src={Service3} />
                    <h4>MRI Test</h4>
                    <p>Magnetic resonance imaging (MRI) is a type of scan that uses strong magnetic fields and radio waves to produce detailed images of the inside of the body</p>
                </div>
                <div className='services-each'>
                    <img src={Service4} />
                    <h4>City Scan Test</h4>
                    <p>A CT scan is a diagnostic imaging exam that uses X-ray technology to produce images of the inside of the body. A CT scan can show detailed images of any part of the body, including the bones, muscles, organs and blood vessels.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;