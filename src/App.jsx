import React from "react"
import { useEffect, useState } from "react"
import { Routes, Route} from "react-router-dom"
// import'./index.css'
import { AllPups, PuppyCard, SinglePup, Home, Navbar, SearchBar } from './index'

function App() {
const [puppies, setAllPuppies] = useState([])

  useEffect(() => {
    const fetchPuppies = 
    async function () {
      const cohort = "2304-FTB-ET-WEB-FT"
      const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}`;
        try {
            const response = await fetch(`${baseURL}/players`)
            const translateddata = await response.json();
            setAllPuppies(translateddata.data.players)
        } catch (error) {
            console.log(error);
        };
      };
    fetchPuppies()
  }, []);

  
  return (
    <>
    
    <NavBar puppies={puppies}/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allpuppies" element={<AllPups puppies={puppies}/>} />
      <Route path="/allpuppies/:id" element={<PuppyCard puppies={puppies}/>} />

    </Routes>

    </>
  );
}


export default App