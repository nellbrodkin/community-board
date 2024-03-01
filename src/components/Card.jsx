import React from "react";

const Card = (props) => {
    return (
        <div class="card">
            <img src={props.image} alt={props.image}></img>
            <h2>{props.name}</h2>
            <h3>{props.time} min</h3>
            <a href={props.url}>
                <button>more information</button>
            </a>
            
        </div>

    )        
}
export default Card;