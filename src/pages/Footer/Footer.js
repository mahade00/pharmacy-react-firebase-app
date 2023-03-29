import React from 'react';
import './Footer.css';
import Logo from '../images/logo/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer'>
                <div className='footer-each'>                    
                    <img className='logo' src={Logo} />                
                    <p>27/A, Dhanmondi, Dhaka</p>
                    <p>Contact Number: +88-017-45-999-699</p>
                    <p>e-mail: contact@yed.com</p>
                    <div className='footer-social'>
                        <a href='/'><p className='footer-icon'><FacebookIcon className='footer-social-icon'/> </p></a>
                        <a href='/'><p className='footer-icon'><LinkedInIcon className='footer-social-icon' /></p></a>
                        <a href='/'><p className='footer-icon'><TwitterIcon  className='footer-social-icon'/></p></a>
                        <a href='/'><p className='footer-icon'><WhatsAppIcon className='footer-social-icon'/></p></a>
                    </div>                                    
                </div>
                
                <div  className='footer-each'>
                    <h4>About Us</h4>
                   <a href="/"><p>Our Mission & Values</p></a> 
                   <a href="/"><p>Leadership</p></a> 
                   <a href="/"><p>Transformation</p></a> 
                   <a href="/"><p>Awards</p></a> 
                   <a href="/"><p>Diversity is Our Specialty</p></a> 
                   <a href="/"><p>Publications & Reports</p></a> 
                   <a href="/"><p>Our Mission & Values</p></a> 
                   <a href="/"><p>olicies & Procedures</p></a> 
                    
                </div>
                <div className='footer-each'>
                    <h4>Our Service</h4>
                    <a href='/'><p>Lung Diseases</p></a>
                    <a href='/'><p>Orthopaedic</p></a>
                    <a href='/'><p>Pharmacy</p></a>
                    <a href='/'><p>Sport Injury</p></a>
                    <a href='/'><p>Heart</p></a>
                    <a href='/'><p>Dental Service</p></a>
                </div>
                <div className='footer-each'>
                    <h4>Hospital Hours</h4>
                    <p><AccessTimeIcon className='footer-time-icon'/><span className='footer-day'>Monday-Friday     </span><span className='footer-time'>08:00-20:00</span> </p>
                    <p><AccessTimeIcon className='footer-time-icon'/><span className='footer-day'>Saturday       </span>  <span className='footer-time'>09:00 - 18:00</span></p>
                    <p><AccessTimeIcon className='footer-time-icon'/><span className='footer-day'>Sunday </span><span className='footer-time'>09:00 - 18:00</span></p>
                    <p><span className='footer-emergency'>Emergency : 24 hours</span></p>
                </div>
             </div>
           
        </div>
    );
};

export default Footer;