import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


function SearchBar (props) {
  const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
  const puppies=props.puppies;
  const navigate = useNavigate()


    let [searchQuery, setSearchQuery] = useState("");

    let filteredPups = puppies.filter((singlePup) => {
    let lowercasedName = singlePup.name.toLowerCase(); 
    let lowercasedQuery = searchQuery.toLowerCase(); 

    if (lowercasedName.includes(lowercasedQuery)) {

      return singlePup

    }
  })
    return (
      <div className="search-bar-input">
      <input 
       style={BarStyle}
       key="search-bar"
       value={searchQuery}
       placeholder={"Search-a-Pup"}
       onChange={(e) => setSearchQuery(e.target.value)}
      />

{filteredPups.length && searchQuery.length >= 1 ? filteredPups.map((singlePup, idx) => {
          return (
            <div key={idx} 
            onClick={() => {
              setSearchQuery("")
              navigate(`/allpuppies/${singlePup.id}`);
          }}>
              <h2> { singlePup.name }</h2>
            </div>
          )
        }) : <div> </div>
}

      </div>
    );
  }
  
  export default SearchBar;