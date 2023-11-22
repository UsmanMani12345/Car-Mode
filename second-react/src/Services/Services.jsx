import React from 'react';
import './Services.css';
import Image from '../images/211.png';
import {FaArrowRight} from 'react-icons/fa';
const Services = () => {
  return (
    <>
    <div className="services" id="services">
        <div className="services-heading">
        <h1>Our Services</h1>
        <p>Our Best Services & Online Booking</p>
        </div>

        <div className="services-anchor">
            <a href="" className='civic'>CIVIC</a>
            <a href="">BMW</a>
            <a href="">VINTAGE</a>
            <a href="">SUZUKI</a>
            
        </div>
            <div className="car-services">
                <div className="car-img">
                    <img src={Image} alt="" />
                </div>
            </div>

            <div className="services-content">
                <div className="services-heading">
                    <h2>Honda City 1.2LS MT</h2>
                    <span>Starting From PKR 4,699,000</span>
                </div>

                <div className="services-heading">
                    <h2>BMW 1.2LS MT</h2>
                    <span>Starting From PKR 6,699,000</span>
                </div>
            </div>


            <div className="services-button">
                <h4>*For detailed price kindly use price calculator</h4>
                <div className="explore">
                <a href="">Explore Now</a>
                 <FaArrowRight className='icon'/>   
                </div>
            </div>
    </div>
    
    
    
    </>
  )
}

export default Services