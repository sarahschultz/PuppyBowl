import React, { useState } from "react";
import "../index.css"
const cohort = "2304-FTB-ET-WEB-FT"
const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}`;

const SendDeleteRequest =
async function (event) {
    fetch(`${baseURL}/players`, {});
    try {
        console.log(event.target.value)
        const response = await fetch(`${baseURL}/players`, 
        {
            method: "DELETE",
        }
        );
        const translatedData = await response.json(); 
        console.log(translatedData);
        const filteredPuppies = props.allPuppies.filter((puppy) => {
            if (puppy.id != event.target.value) {
                return puppy
            }
        })
        props.setAllPuppies(filteredPuppies)
    } catch (error) {
        console.log(error); 
    }
};


export default SendDeleteRequest