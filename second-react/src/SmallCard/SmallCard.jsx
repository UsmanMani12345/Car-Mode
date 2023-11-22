import React from 'react';
import './SmallCard.css';

import {FaTimesCircle, FaClock, FaCar} from 'react-icons/fa';




const SmallCard = () => {
  return (
    <>
    <div className="small-card" id="small-card">

    <div className="card">
        <div className="card-one">
            <div className="card-one-icon">
                <FaClock className='icon'/>
                <h2>Let's Go On Time</h2>
            </div>
                <div className="card-one-para">
             
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi nostrum quos nihil quasi deleniti.</p>
                </div>
        </div>

        <div className="card-one">
            <div className="card-one-icon">
                <FaTimesCircle className='icon'/>
                <h2>WithOut License</h2>
            </div>
                <div className="card-one-para">
             
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi nostrum quos nihil quasi deleniti.</p>
                </div>
        </div>


        <div className="card-one">
            <div className="card-one-icon">
                <FaCar className='icon'/>
                <h2>Cars In Good Condition</h2>
            </div>
                <div className="card-one-para">
             
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi nostrum quos nihil quasi deleniti.</p>
                </div>
        </div>
    </div>





    </div>
    
    
    </>
  )
}

export default SmallCard