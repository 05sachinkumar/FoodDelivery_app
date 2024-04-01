import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Food delivery apps are third-party delivery services hosted on web applications that restaurants or retailers partner with to showcase their menu and food offerings, allowing customers to order food and get it delivered to their doorstep. Whether it's fast food or groceries, food delivery apps have revolutionized the restaurant and food delivery industry as they offer customers a convenient way to order food from the comfort of their homes.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-971-761-4142</li>
            <li>contact@fooddelivery.com</li>
          </ul>
        </div>

      </div>
      <hr/>
      <p className="footer-copyright">Copyright  2024 © fooddelivery.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
