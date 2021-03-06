import React, { Component } from 'react'
import '../styles/Footer.css'

import Logo from '../assets/img/calista-logo.png'

class Footer extends Component {

  render() {

    return (
      <div className="footer-section">
          <div className="inner">

            <a href="/">
                <div className="logo">   
                    <img src={Logo} alt="" />
                    <p>alista</p>
                </div>
            </a>
            <div className="contact">
                <p>Contact Us</p>
                <ul className="icons">
                    <li>
                        <a href="mailto:alex.delitzas@gmail.com?cc=kyrcha@gmail.com&subject=Calista%20Engine">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                            <path 
                                d="M37.3,15.3v15.3c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.6-1.4,0.9-2.2,0.9H5.8c-0.8,0-1.6-0.3-2.2-0.9s-0.9-1.4-0.9-2.2V15.3 c0.5,0.6,1.2,1.1,2,1.7c4.7,3.1,7.9,5.4,9.6,6.7c0.7,0.5,1.4,0.9,1.8,1.2c0.4,0.3,1,0.6,1.9,0.9c0.7,0.3,1.5,0.5,2.1,0.5l0,0 c0.6,0,1.4-0.2,2.1-0.5c0.7-0.3,1.4-0.6,1.9-0.9c0.4-0.3,1-0.7,1.8-1.2c2.2-1.6,5.4-3.8,9.6-6.7C36.1,16.5,36.7,15.9,37.3,15.3 L37.3,15.3z M37.3,9.6c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.5,1.8-2.4,2.4c-4.9,3.3-7.9,5.4-9,6.2c-0.1,0.1-0.4,0.3-0.8,0.6 c-0.4,0.3-0.7,0.5-1,0.7c-0.3,0.2-0.6,0.4-1,0.6c-0.4,0.2-0.7,0.4-1.1,0.5c-0.4,0.1-0.6,0.2-0.9,0.2l0,0c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.7-0.3-1.1-0.5c-0.4-0.2-0.7-0.4-1-0.6c-0.3-0.2-0.6-0.4-1-0.7c-0.4-0.3-0.7-0.5-0.8-0.6c-1.1-0.8-2.8-2-5.1-3.5 c-2.3-1.6-3.3-2.4-3.7-2.7c-0.8-0.5-1.6-1.2-2.3-2.2s-1-1.9-1-2.6c0-1,0.3-1.9,0.8-2.5c0.5-0.6,1.2-1,2.3-1h28.4 c0.8,0,1.6,0.3,2.2,0.9C37.1,8.1,37.3,8.8,37.3,9.6L37.3,9.6z" 
                            >
                            </path>
                        </svg>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="useful-links">
                <p>Follow Us</p>
                <ul className="icons">
                    <li>
                        <a href="https://github.com/calista-ai" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path 
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
                            >
                            </path>
                        </svg>
                        </a>
                    </li>
                </ul>
            </div>
          </div>

      </div>
    )
    
  }
}

export default Footer