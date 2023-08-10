import React from "react";
import "./styles.css"
function NewCard(props){
    return(

        <>
        <div className="card">
         <img className="card-image" src={props.data.image}></img> 
        <div className="card-content">
            <h1 className="title">{props.data.title}</h1>
            <p className="description">{props.data.description}</p>
            
            <h6>{props.data.publishedA}</h6>
            </div>  


        </div>
        
        
        
        </>
    )
}
export default NewCard;