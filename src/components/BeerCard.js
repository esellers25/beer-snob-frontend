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
    
    <div class="card">
      <div class="centered image">
        <img className="beer-pic" src={image}></img>
        </div>
      <div class="content">
        <div class="header">{name}</div>
        <div class="meta">
          <a>{manufacturer}</a>
        </div>
        <div class="description">
          Flavor Notes: {flavorProfile}
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
          <button onClick={handleReviewClick}>Read Reviews</button>
        </span>
        <span class="user icon">
          <button onClick={handleLikesClick}>{likeCount} Likes 👍 🍺</button>
        </span>
        </div>
      </div>
    )
}

export default BeerCard;