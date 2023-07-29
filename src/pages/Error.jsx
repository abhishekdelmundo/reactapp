import React from 'react'
import {Link} from 'react-router-dom'
import '../css/404.css'



function Error() {
  return (
    <>
    <div className="page-not-div">
      <img src="/images/404.png" alt="" />
      <Link to='/'><button>go to home page</button></Link>
    </div>
    
    </>
  )
}

export default Error
