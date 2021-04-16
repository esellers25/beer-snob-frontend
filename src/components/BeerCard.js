import {useState} from "react"
import {useHistory} from "react-router-dom"

function BeerCard({beer}){
  const {id, name, image, type, manufacturer, 
    breweryState, flavorProfile, review} = beer
  const [likeCount, setLikeCount] = useState(beer.likes)
  const history = useHistory();

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

  function handleReviewClick(){
    history.push(`/beerDetail/${id}`)
  }
   
  // if (review) const reviewArr = review.map(reviewObj => 
  //   <p>{reviewObj.content}</p>)
  
  return (
       <div>
           <h3>{name}</h3>
           <img src={image} alt={name}></img>
           <p>Type of Beer: {type}</p>
           <p>Brewery: {manufacturer} State: {breweryState}</p>
           <p>Flavor Profile: {flavorProfile}</p>
           <p>{likeCount} Likes</p>
           <button onClick={handleLikesClick}>👍 This 🍺</button>
           <button onClick={handleReviewClick}>Read Reviews</button>
       </div>
    )
}

export default BeerCard;