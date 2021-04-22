import {useState} from "react"
import BeerDetail from "./BeerDetail"

function BeerCard({beer, onAddToFridge}){
  const {id, name, image, manufacturer, link} = beer
  const [likeCount, setLikeCount] = useState(beer.likes)
  const [showDetail, setShowDetail] = useState(false)

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

  function handlePopUp(){
    setShowDetail(!showDetail)
  }

  function addBeerClick(){
    onAddToFridge(beer)
  }

  
  return (
    <>
    <div class="card">
      <div class="ui small centered image">
        <img onClick={handlePopUp} src={image} alt={name}></img>
        </div>
      <div class="content">
        <div className="cardHeader">{name}</div>
        <div class="meta">
          <a className="cardLink" href={link} target="_blank" rel="noreferrer">{manufacturer}</a>
        </div>
      </div>
      <div class="extra content">
          <BeerDetail id={id} likeCount={likeCount} onLikeClick={handleLikesClick}/>
          <button class="ui small button" onClick={handleLikesClick}>{likeCount} Likes</button>
          <button class="ui small button" onClick={addBeerClick}>Add to My Fridge</button>
      </div>
     </div>
     </>
  )
}

export default BeerCard;