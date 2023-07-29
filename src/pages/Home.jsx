import React, {useState, useEffect, useLayoutEffect} from 'react'
import Navbar from '../Componets/Navbar.jsx'


import '../css/state.css'

function Home() {
  const [count, setCount] = useState(0);
  
  useEffect(()=> {
    document.title = count;
  }, )
  
  
  const [rnum, setRnum] = useState(0);

  useLayoutEffect(()=> {
    if(rnum === 0) setRnum(rnum + Math.random() * 100)
  }, [rnum]);
  
  return (
    <div>
      <Navbar/>

      <div className="usestate">
        <div className="count">
          <button onClick={()=> (count === 10)? setCount(10) : setCount(count + 1) } >+</button>
          <div className="counter">{count}</div>
          <button onClick={()=> (count === 0) ? setCount(0) : setCount( count - 1)} >-</button>
        </div>
      </div>
      
      <h3>{rnum}</h3>
      <button onClick={()=> setRnum(0)}>enter</button>
    </div>
  )
}

export default Home
