import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='header-top-main'>
            <div className='container'>
                <div className='row header-top'>
                    <div className='col-xl-3 col-lg-3 d-lg-flex align-items-center'>
                        Header1
                    </div>
                    <nav className='col-xl-6 col-lg-7 main-menu'>
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Product</Link></li>
                            <li><Link>Service</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </nav>
                    <div className='col-xl-3 col-lg-2 align-items-center justify-content-end text-end call-menu'>
                        <a>Need Help ? 000-000-0000</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
