import React from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar"
import "../index.css"

function Navbar (props) {
    const puppies=props.puppies;
    return(
        <div id="navbar">
            <nav>
                <Link className="links" to="/"> Home </Link>
                <Link className="links" to="/allpuppies"> See All Pups </Link>
            </nav>
        <SearchBar puppies={puppies}/>
        
        </div>

    )
}

export default Navbar