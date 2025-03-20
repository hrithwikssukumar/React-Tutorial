
import React from "react";

export default function Button ({label}){
    const onAlert =(event)=>{
        console.log(event)
        event.target.innerText = "Clicked"
        alert("Welcome...");
    }

    return <button onClick={onAlert}>{label}</button>

}

