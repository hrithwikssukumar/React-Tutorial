

import React from "react"


const ListItem = ({item,isIncluded}) =>{
   return(
    <li>
        {item}
        {isIncluded ? "&":"#"}
    </li>
   );
     
}


export  const PackageDetails = () =>{
    return(
        <section>
            <h1>Kashmir Trip Details</h1>
            <ul>
                <ListItem
                item = "Breakfast,Lunch and Dinner"
                isIncluded = {true}
                />
                <ListItem
                item = "Accomodation in 3 star hotel"
                isIncluded = {true}
                />
                <ListItem
                item = "Flight ticket"
                isIncluded = {false}
                />
            </ul>
        </section>
    )

} 
