import React from 'react'
import './Footer.css'
import FooterPic from '../Image/undraw_deliveries_2r4y.svg'

function Footer() {
  return (
    <div>
        <section id="footer">
            <img src={FooterPic} class="footer-img" alt=" " />
            <div class="footer-row">
                <div class="footer-left">
                    <h1>Opening Hours</h1>
                    <p>Monday to Friday - 9am to 9pm</p>
                    <p>Saturday to Sunday - 8am to 11pm</p>
                </div>
                <div class="footer-right">
                    <h1>Get In Touch</h1>
                    <p>Nairobi, Kenya<i class="fa fa-map-marker"></i></p>
                    <p>Quickfleet@yahoo.com<i class="fa fa-envelope"></i></p>
                    <p>0723214245<i class="fa fa-phone"></i></p>
                </div>
            </div>
            <div class="social-links">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-youtube-play"></i>
                <p>Copyright @QuickFleet, All Rights Reserved</p>
            </div>
        </section>
    </div>
  )
}

export default Footer

