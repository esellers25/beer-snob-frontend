import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

function BeerDetail(){
    const [beer, setBeer] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:3000/beers/${id}?_embed=review`)
        .then(res => res.json())
        .then(beerData => {
            setBeer(beerData)
            setIsLoaded(true)
        })
    }, [id]);
    
    if (!isLoaded) return <h3>Loading...</h3>

    const {name, image, type, breweryState, manufacturer, flavorProfile} = beer

    return(
        <div>
           <h3>{name}</h3>
           <img src={image} alt={name}></img>
           <p>Type of Beer: {type}</p>
           <p>Brewery: {manufacturer} State: {breweryState}</p>
           <p>{flavorProfile}</p>
           {/* <p>{likeCount} Likes</p>
           <button onClick={}>👍 This 🍺</button>
           <button onClick={}>Read Reviews</button> */}
       </div>
    )
}

export default BeerDetail;