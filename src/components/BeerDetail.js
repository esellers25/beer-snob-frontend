import {useState, useEffect} from "react";
import {Modal, Image, Button} from "semantic-ui-react"

function BeerDetail({id}){
  const [beer, setBeer] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [userReview, setUserReview] = useState("")
  const [open, setOpen] = useState(false)
    
  useEffect(() => {
    fetch(`http://localhost:3000/beers/${id}?_embed=review`)
      .then(res => res.json())
      .then(beerData => {
        setBeer(beerData)
        setIsLoaded(true)
      })
  }, [id]);
    
  if (!isLoaded) return <h3>Loading...</h3>
    
  const {name, image, type, breweryState, manufacturer, link, flavorProfile, likes, review} = beer

  const reviewArray = review.map(reviewObj => 
    <p className="reviews" key={reviewObj.id}>{reviewObj.content}</p>
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
      .then(newReview => {
        onAddReview(newReview)
        setUserReview("")
      })
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
    <Modal onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open} trigger={<Button class="ui tiny button">Details</Button>}>
      <h2 className="modalheader">{name}</h2>
      <Modal.Content image>
        <Image size='medium' src={image} wrapped alt={name}/>
        <Modal.Description>
          <a className="modallink" href={link} target="_blank" rel="noreferrer">{manufacturer}</a>
          <p className="modaltext">Type of Beer: {type}</p>
          <p className="modaltext">State: {breweryState}</p>
          <p className="modaltext">Flavor Profile: {flavorProfile}</p>
          <button onClick={handleLikesClick}>{likes} Likes 🍺</button>
          {beer.review.length > 0 ? <h3>Reviews</h3> : null}
          <div>
            {reviewArray}
          </div>
          <form onSubmit={handleReviewSubmit}>
            <label>{beer.review.length > 0 ? <h3>Add your review</h3> : <h3>Be the first to review!</h3>}</label>
            <input type="textarea" value={userReview} onChange={e => setUserReview(e.target.value)}></input>
            <button>Submit</button>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default BeerDetail;