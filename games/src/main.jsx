import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { GameCard } from './GameCard.jsx'
import { FrontPage } from './FrontPage.jsx'
import { Genres } from './GamesGenres.jsx'
import { useFetch } from './useFetch.js'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <FrontPage/>
    <Genres> 
    <GameCard name={"carlos"}/>
    <GameCard/>
    <GameCard/>
    <GameCard/>
 </Genres>
 
 </>
 



 
)
