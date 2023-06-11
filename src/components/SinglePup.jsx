import React from "react";
import { useNavigate } from "react-router-dom"
import "../index.css";


const SinglePup =  (props) => {
    const navigate = useNavigate()
    
    return (
        <div className="puppy-card" key={props.puppy.id}>
            <h4 
            onClick={() => {
                navigate(`/allpuppies/${props.puppy.id}`);
            }}
            >
                {props.puppy.name}
            </h4>
            <h4>{props.puppy.breed}</h4>
            <h4>{props.puppy.status}</h4>
            <img src={props.puppy.imageUrl}/>
        </div>  
    );


};
export default SinglePup