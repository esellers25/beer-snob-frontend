import {useState} from "react"

function BeerCard({beer}){
  const {id, name, image, type, manufacturer, 
    breweryState, flavorProfile, review} = beer
   
  const reviewArr = review.map(reviewObj => 
    <p>{reviewObj.content}</p>)
  
  return (
       <div>
           <h3>{name}</h3>
           <img src={image} alt={name}></img>
           <p>Type of Beer: {type}</p>
           <p>Brewery: {manufacturer} State: {breweryState}</p>
           <p>{flavorProfile}</p>
           <p>Reviews: {reviewArr}</p>
       </div>
    )
}

export default BeerCard;