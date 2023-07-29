import React, {useContext} from 'react'
import '../css/blocks.css'
import { AppCreated } from '../Database/Developers.jsx'

function Blocks() {
   const Dev_Data = useContext(AppCreated);

   
  return (

   Dev_Data.map((f)=> {

      const {name, profile, catlog} = f
         return (
            <>
            
            <div className="bloks-container-dshdg">
               
               <img src={profile} alt="" />
               <div className="dev-details-csf">
                  <h3>{name}</h3>
                  <p>{catlog}</p>
               </div>
            </div>
            </>
         )
      })

   //  <div className="bloks-container-dshdg">
   //    <img src="/images/horror/Bhoot.jpeg" alt="" />
   //    <div className="dev-details-csf">
   //       <h3></h3>
   //       <p>Hello, I’m <b>@Abhsihekdelmundo</b> and I work as a web developer. I have been working as a web developer for quite some time now. I believe I am a very ambitious person who loves to work....</p>
   //    </div>
   //  </div>
  )
}

export default Blocks
