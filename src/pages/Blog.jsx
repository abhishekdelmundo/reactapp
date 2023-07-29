import React from 'react'
import Navbar from '../Componets/Navbar.jsx'
import '../css/blog.css'
import Cards from './Cards.jsx'



function Blog() {
  return (
    <div>
      <Navbar/>
      <br />

      <div className="main-cards">
        <h2>Horror Movies</h2>
        <div className="flex-cards">
          <Cards name="1920" image="/images/horror/1920.jpeg" catalog="Arjun Singh Rathod is in love with Lisa, a Christian, but his father wants him to marry a Hindu. He decides to break all ties with his family, both get married..."/>
          <Cards name="Ragini MMS 2" image="/images/horror/Ragini_MMS_2.jpg" catalog="A director attempts to shoot an erotic horror movie in a house where, unbeknown to him, a demonic spirit resides. Even before the crew starts filming, the spirit possesses the lead actress's body."/>
          <Cards name="The House Next Door" image="/images/horror/Gruham.jpeg" catalog="Living a peaceful life in the mountains, Krishnakanth and Lakshmi welcome their new neighbours, the D'Costas. When their eldest daughter, Jenny, invites unwanted elements in the house, terror ensues."/>
          <Cards name="Bhoot" image="/images/horror/Bhoot.jpeg" catalog="A couple is shown having a romantic adventure on the ship before being killed by a ghost. The body of a girl is found buried on the beach."/>
          <Cards name="Ek thi daayan" image="/images/horror/ek_thi_daayan.webp" catalog="Bobo, a famous magician, plans to marry his girlfriend. However, he is secretly scarred by persistent hallucinations of his dead sister and is forced to seek psychiatric help."/>
          <Cards name="Mumbai 125KM 3d" image="/images/horror/125km.jpg" catalog="While travelling to Mumbai on a road trip, Prem, Jacks, Aashika, Diya and Vivek accidentally hit a car. They then encounter a woman on the way..."/>
          <Cards name="Pizza" image="/images/horror/pizza_boy.jpeg" catalog="A Pizza delivery boy's mundane life takes a horrifying turn when he is sent to make a delivery to the home of a family who have a dark secret."/>
          <Cards name="Lupt" image="/images/horror/lupt.jpg" catalog="Lupt is a 2018 Indian Hindi-language supernatural horror film starring Javed Jaffrey, Niki Aneja Walia and Vijay Raaz. The film is directed by Prabhuraj."/>
          <Cards name="Alone" image="/images/horror/alone.jpg" catalog="Sanjana's life is ruined by the evil spirit of her conjoined twin who died during surgery. In the past, her sister Anjana was jealous of her boyfriend Kabir..."/>
        </div>
      </div>
    </div>
  )
}

export default Blog
