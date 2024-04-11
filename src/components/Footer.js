import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='copyright'>
            <p>© 2024 by <span><Link className='footer-website-name' to="/">Rahul Jangra</Link></span></p>
        </div>

        <div className='footer-details'>
            <div className='footer-phone-no'>
                <h3 className='footer-heading'>Call</h3>
                <p>+91 9996137001</p>
            </div>
            <div className='footer-email'>
                <h3 className='footer-heading'>E-mail</h3>
                <a href="mailto:rjangra4015@gmail.com">rjangra4015@gmail</a>
            </div>
            <div className='footer-social-media'>
                <h3 className='footer-heading'>Follow</h3>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
