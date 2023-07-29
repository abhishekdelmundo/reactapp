import React from 'react'
import '../css/movie.css'


function MovieState() {
  return (
    <div className="main_con">
      <div className="container">
        <div className="child1">
          
          <div className="movie_enter">
            <h3>Movie Details</h3>
            {/* <input type="image" src="" alt="" /> */}
            <input type="text" placeholder="Alone" />
            <input type="text" placeholder="ex : 'Horror'" />
            <textarea name="" id="" cols="30" rows="10"></textarea>

          </div>
        </div>
        <div className="child2"></div>
      </div>
    </div>
  )
}

export default MovieState
