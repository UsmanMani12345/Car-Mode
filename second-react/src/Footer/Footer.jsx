import React from "react";
import "./Footer.css";
import { FaLocationArrow, FaCarAlt, FaNotesMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-icon">
            <div className="icon-detail">
              <div className="medical">
                <FaLocationArrow className="detail" />
              </div>
              <h3>Pakistan</h3>
            </div>

            <div className="icon-detail">
              <div className="medical">
                <FaCarAlt className="detail" />
              </div>
              <h3>Safe Driving</h3>
            </div>

            <div className="icon-detail">
              <div className="medical">
                <FaNotesMedical className="detail" />
              </div>
              <h3>Corporate</h3>
            </div>
          </div>

          <div className="footer-icon">
            <div className="icon-detail-one">
              <h3>SERVICES</h3>
            </div>

            <div className="icon-detail-one">
              <h3>Online Booking</h3>
            </div>

            <div className="icon-detail-one">
              <h3>Delivery Status</h3>
            </div>
          </div>

          <div className="footer-icon">
            <div className="icon-detail-one">
              <h3>ABOUT US</h3>
            </div>

            <div className="icon-detail-one">
              <h3>Honda Atlas Cars(Pakistan) Ltd</h3>
            </div>

            <div className="icon-detail-one">
              <h3>Financial Reports</h3>
            </div>

            <div className="icon-detail-one">
              <h3>Terms and Conditions</h3>
            </div>
          </div>

          <div className="footer-icon">
            <div className="icon-detail-one">
              <h3>DISCOVER</h3>
            </div>

            <div className="icon-detail-one">
              <h3>News & Events</h3>
            </div>

            <div className="icon-detail-one">
              <h3>Promotions</h3>
            </div>

            <div className="icon-detail-one">
              <h3>HSE Policy</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
