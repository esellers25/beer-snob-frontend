import {useState} from "react"

function BeerCard({beer}){
  const {id, name, image, type, manufacturer, 
    breweryState, flavorProfile, review, likes} = beer
  const [likeCount, setLikeCount] = useState(beer.likes)

  function handleLikesClick(){
    const likeData = {
      likes: likeCount + 1
    }
    fetch(`http://localhost:3000/beers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(likeData)
    })
    .then(r => r.json())
    .then(updatedBeer => setLikeCount(updatedBeer.likes))
  }
   
  const reviewArr = review.map(reviewObj => 
    <p>{reviewObj.content}</p>)
  
  return (
       <div>
           <h3>{name}</h3>
           <img src={image} alt={name}></img>
           <p>Type of Beer: {type}</p>
           <p>Brewery: {manufacturer} State: {breweryState}</p>
           <p>{flavorProfile}</p>
           <p>{likeCount} Likes</p>
           <button onClick={handleLikesClick}>👍 This 🍺</button>
           <p>Reviews: {reviewArr}</p>
       </div>
    )
}

export default BeerCard;