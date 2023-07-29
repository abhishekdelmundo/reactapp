import React from 'react'
import Navbar from '../Componets/Navbar.jsx'
import '../css/nav.css'
import '../css/blocks.css'
import Blocks from './Blocks.jsx'

import {AppProvider} from '../Database/Developers.jsx'

function Contact() {
  return (
   <AppProvider>
    <div>
      <Navbar/>
      <div className="Blocks-main-xcvf">
         <h2>Developers</h2>
         <div className="Blocks-children-xcsgc">
            <Blocks/>
         </div>
      </div>
    </div>
    </AppProvider>
  )
}

export default Contact
