import {useState} from "react"
import {useHistory} from "react-router-dom"

function BeerCard({beer}){
  const {id, name, image, type, manufacturer, 
    breweryState, flavorProfile, link, review} = beer
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
      <div class="ui small centered image">
        <img onClick={handleReviewClick} class="ui image" src={image} alt={name}></img>
        </div>
      <div class="content">
        <div className="cardHeader">{name}</div>
        <div class="meta">
          <a className="cardLink" href={link} target="_blank" rel="noreferrer">{manufacturer}</a>
        </div>
        <div className="description">
          <p>Made in: {breweryState}</p> {"\n"}
          <p>Type: {type}</p> {"\n"}
          <p>Flavor Notes: {flavorProfile}</p> 
        </div>
      </div>
      <div class="extra content">
        <div class="ui tiny buttons">
          <button class="ui tiny button" onClick={handleReviewClick}>Details</button>
          <button class="ui tiny button" onClick={handleLikesClick}>{likeCount} Likes 🍺</button>
        </div>
      </div>
    </div>
  )
}

export default BeerCard;