import React, {useState} from 'react'
import Navbar from '../Componets/Navbar.jsx'
import '../css/login.css'


function Login() {

   const [login, setLogin] = useState({
      username : '',
      email : '',

   });

   const inputHandle = (event) => {
      const name = event.target.name
      const value = event.target.value

      setLogin((a)=> {
         return {...a, [name]:value}
      })
   }
   
  return (
   <>
   <Navbar/>
   <br />
    <div className="login-form">
     <div className="main-form">
      <h3>Login..</h3>
      <input type="text" placeholder="username" name="username" value={login.username} onChange={inputHandle}  />
      <input type="email" placeholder="email" name="email" value={login.email} onChange={inputHandle} />
      <input type="password" placeholder="password" name="password" />
      
      <button>submit</button>
      <p>{`Hello my name is ${login.username}_. and email is ${login.email}_.`}</p>
      
      
     </div>
     <p></p>
    </div>
    
    </>
  )
}

export default Login
