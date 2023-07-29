import React from 'react'
import '../css/blog.css'


function Cards(props) {
  
  return (
    <>
    <div className="u-cards">
      <img src={props.image} alt="" />
      <div>
         <h3>{props.name}</h3>
         <p>{props.catalog}</p>
      </div>
    </div>
    
    
    </>
  )
}

export default Cards
