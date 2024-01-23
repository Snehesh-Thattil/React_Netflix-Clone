import React from 'react'
import './App.css'
import Navbar from "./Components/NavBar/NavBar";
import Banner from './Components/Banner/Banner';
import GenresCards from './Components/RowPosts/GenresCards';
import { Action, Comedy, Documentaries, Horror, Originals, Romance } from './genres'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>

      <GenresCards url={Originals} title='Netflix Originals' />
      <GenresCards url={Action} title='Action' isSmall />
      <GenresCards url={Comedy} title='Comedy' isSmall />
      <GenresCards url={Horror} title='Horror' isSmall />
      <GenresCards url={Romance} title='Romance' isSmall />
      <GenresCards url={Documentaries} title='Documentaries' isSmall />
    </div>
  )
}

export default App;