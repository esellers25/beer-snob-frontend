import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

function BeerDetail(){
  const [beer, setBeer] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const {id} = useParams();
  const [hasReview, setHasReview] = useState([])
  const [userReview, setUserReview] = useState("")
    
  useEffect(() => {
    fetch(`http://localhost:3000/beers/${id}?_embed=review`)
      .then(res => res.json())
      .then(beerData => {
        setBeer(beerData)
        setIsLoaded(true)
      })
  }, [id]);
    
  if (!isLoaded) return <h3>Loading...</h3>
    
  const {name, image, type, breweryState, manufacturer, flavorProfile, likes, review} = beer

  const reviewArray = review.map(reviewObj => 
    <p key={reviewObj.id}>{reviewObj.content}</p>
  )
    
  function onAddReview(newReview){
      setBeer({...beer, review:[...beer.review, newReview]})
  }

  function onAddLike(newLikes){
      setBeer({...beer, likes: newLikes})
  }

  function handleReviewSubmit(e){
    e.preventDefault(); 
    const reviewData = {
      content: userReview,
      beerId: parseInt(id)
    }
    fetch("http://localhost:3000/review", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body:JSON.stringify(reviewData)
    })
      .then(r => r.json())
      .then(newReview => onAddReview(newReview))
  }

  function handleLikesClick(){
    const likeData = {
      likes: beer.likes + 1
    }
    fetch(`http://localhost:3000/beers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(likeData)
    })
      .then(r => r.json())
      .then(updatedBeer => 
        onAddLike(updatedBeer.likes))
  }

  return(
    <div>
    <h3>{name}</h3>
    <img src={image} alt={name}></img>
    <p>Type of Beer: {type}</p>
    <p>Brewery: {manufacturer} State: {breweryState}</p>
    <p>{flavorProfile}</p>
    <p>{likes} Likes</p>
    <button onClick={handleLikesClick}>👍 This 🍺</button>
    {reviewArray}
    <h2>Add a Review</h2>
    <form onSubmit={handleReviewSubmit}>
      <label>Write your comment</label>
      <input type="textarea" value={userReview} onChange={e => setUserReview(e.target.value)}></input>
      <button>Submit</button>
    </form>
  </div>
  )
}

export default BeerDetail;