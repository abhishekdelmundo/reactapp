import React, {createContext} from 'react'

const AppCreated = createContext()

const AppProvider = ({children}) => {
   const Dev_Data = [
      {
         name : '1920',
         profile : '/images/horror/1920.jpeg',
         category : 'horror',
         catlog : 'Arjun Singh Rathod is in love with Lisa, a Christian, but his father wants him to marry a Hindu. He decides to break all ties with his family, both get married...',
      },
      {
         name : 'Ragini MMS 2',
         profile : '/images/horror/Ragini_MMS_2.jpg',
         category : 'horror',
         catlog : 'A director attempts to shoot an erotic horror movie in a house where, unbeknown to him, a demonic spirit resides. Even before the crew starts filming, the spirit possesses the lead actress....',
      },
      {
         name : 'Gruham',
         profile : '/images/horror/Gruham2.jpg',
         category : 'horror',
         catlog : 'Living a peaceful life in the mountains, Krishnakanth and Lakshmi welcome their new neighbours, the D"Costas. When their eldest daughter, Jenny, invites unwanted elements in the house, terror ensues.',
      },
      {
         name : 'Bhoot',
         profile : '/images/horror/Bhoot.jpeg',
         category : 'horror',
         catlog : 'A couple is shown having a romantic adventure on the ship before being killed by a ghost. The body of a girl is found buried on the beach.',
      },
      {
         name : 'Ek thi Daayan',
         profile : '/images/horror/ek_thi_daayan.webp',
         catlog : 'Bobo, a famous magician, plans to marry his girlfriend. However, he is secretly scarred by persistent hallucinations of his dead sister and is forced to seek psychiatric help.',
      },
      {
         name : 'Lupt',
         profile : '/images/horror/lupt.jpg',
         catlog : 'Lupt is a 2018 Indian Hindi-language supernatural horror film starring Javed Jaffrey, Niki Aneja Walia and Vijay Raaz. The film is directed by Prabhuraj.',
      },
      {
         name : 'Alone',
         profile : '/images/horror/alone.jpg',
         catlog : "Sanjana's life is ruined by the evil spirit of her conjoined twin who died during surgery. In the past, her sister Anjana was jealous of her boyfriend Kabir...",
      },

   ]
   return <AppCreated.Provider value={Dev_Data}>{children}</AppCreated.Provider>
}

export {
   AppCreated,
   AppProvider
}