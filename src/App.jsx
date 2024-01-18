import React from 'react'
import './App.css'
import Navbar from "./Components/NavBar/NavBar";
import Banner from './Components/Banner/Banner';
import GenresCards from './Components/RowPosts/GenresCards';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <GenresCards></GenresCards>
    </div>
  )
}
export default App;
