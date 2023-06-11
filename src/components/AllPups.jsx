import React from "react"
import SinglePup from "../components/SinglePup"
import '../index.css'


const AllPups = (props) => {
  const puppies=props.puppies;

  
return (
  <div id="puppies-list">
  <h2> All Puppies </h2>
  {
    puppies && puppies.length ? 
    puppies.map((pup) => {
      return  (
        <SinglePup key={pup.id} puppy={pup} />
      )        
      }) 
    : 
    <p>Loading...</p>
    }
  </div>
  );
};

export default AllPups