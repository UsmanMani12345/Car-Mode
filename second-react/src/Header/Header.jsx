import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import Image from '../images/men.png';
import './Header.css';
import { IoSunny , IoMoon } from "react-icons/io5";

const Header = () => {
    const [theme, setTheme] =useTheme();

    //Handle Theme

    const handleTheme=()=>{
        setTheme((prevState)=>(prevState === "light" ? "dark" :"light"));
    };
  return (
    <>
    <div className="header" id="header">
    <div className="overlay"></div>       
   
        <div className="navbar-header">
            <div className="logo">
                <h2>MUJ Production</h2>
            </div>

        <div className="navbar-anchor">
           
                <a href="#header">Home</a>
                <a href="#about">About</a>
                <a href="#services">Cars</a>
                <a href="#product">Pages</a>

          
        </div>
        <div className="small"></div>
        <div className="mode" onClick={handleTheme}>
            {theme === 'light' ?(<IoMoon className='moon'/>):(<IoSunny className='moon'/>)}
        </div>

        </div>

            <div className="header-content">
                <div className="header-left">
                    <div className="heading">
                    <h1>Fastest Online Car <span> Booking </span> or Best Cars</h1>
                    </div>

                    <div className="para-header">
                        <p>We Provide Our Best Cars For Over Clients <br/> Which Is Used In All Over The World <br/> Also Provide Best Drivers</p>
                    </div>
                <div className="link">
                    <div className="header-btn">
                        <a href="">Contact Us</a>
                        
                    </div>
            <div className="header-btn-one">
                <a href="">Online Booking</a>
                </div>
                </div>
                </div>







                {/* Right Side */}


                <div className="right-side">

                    <div className="right">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>











        
    </div>
    </>
  )
}

export default Header