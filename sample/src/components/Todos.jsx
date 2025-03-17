
import React from "react"


export default function Todos (props){
 
    return(
        <div>
            <h1> {props?.userName}'s Todo({props?.functn(new Date())}) </h1>
            <ul>
                <li>Hello Javascript</li>
                <li>Welcome React</li>
            </ul>
        </div>
    )
}