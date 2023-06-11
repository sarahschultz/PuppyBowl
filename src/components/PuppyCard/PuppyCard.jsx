import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const PuppyCard = ({ puppies }) => {
const [pup, setPup] = useState()
const { id } = useParams();
  useEffect(() => {



  setPup (puppies.find((e) => {
      if (e.id == id) {
        return true;
      }
    })
    )
  }, [])


    return (
        <div className="puppy-card">
          {pup && pup.id ? (
            <>
              <h3>Puppy Name: {pup.name}</h3>
              <h4>Puppy Breed: {pup.breed}</h4>
              <h4>Bench Status: {pup.status}</h4>
              <h5>Puppy Id: {pup.id}</h5>
              <img src={pup.imageUrl}/>
            </>
          ) : (
            <h3>Loading</h3>
          )}
        </div>
      );
    };

export default PuppyCard;