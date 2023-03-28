import React from 'react';
import './Doctors.css';
import Doctor1 from '../images/doctor/doctor1.jpg';
import Doctor2 from '../images/doctor/doctor2.jpg';
import Doctor3 from '../images/doctor/doctor3.jpg';
import Doctor4 from '../images/doctor/doctor4.png';

const Doctors = () => {
    return (
        <div className='doctors-main'>
            <h2>Our Doctors</h2>
            <div className='doctors'>
                <div className='doctors-each'>
                    <img src={Doctor1} />
                    <h4> Ryamis Seikh</h4>
                    <p>Anesthesiologist</p>
                </div>
                <div className='doctors-each'>
                    <img src={Doctor2} />
                    <h4> Hujaifa</h4>
                    <p>Allergist</p>
                </div>
                <div className='doctors-each'>
                    <img src={Doctor3} />
                    <h4>Ryamis Seikh</h4>
                    <p>Neurosurgeon</p>
                </div>
                <div className='doctors-each'>
                    <img src={Doctor4} />
                    <h4>Al-Beruni</h4>
                    <p>Anesthesiologist</p>
                </div>
                
            </div>
        </div>
    );
};

export default Doctors;