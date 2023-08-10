import React from "react";
import Header from "./Header";

function User(props){

    return (


        
   <>
   <div>
    
    < Header />
    <h2>NewComponent</h2>
    <h2>I am a { props.brand }!</h2>;
   </div>
   </>
    )
}

export default User;