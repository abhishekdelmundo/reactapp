import React from 'react'
import '../css/nav.css'

import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nvbar1">
          <img src="" alt="" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="nvbar2">
          <Link to="/download"><button>download</button></Link>
          <Link to="/login"><button>login</button></Link>
          <Link to="/signup/?=account"><button>signup</button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
