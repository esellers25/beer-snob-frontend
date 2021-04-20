import {useState} from "react"
import {useHistory} from "react-router-dom"

function AddBeerForm({onAddBeer}){
  const [beerName, setBeerName] = useState("")
  const [image, setImage] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [typeOfBeer, setTypeOfBeer] = useState("")
  const [breweryState, setBreweryState] = useState("")
  const [flavorProfile, setFlavorProfile] = useState("")
  const [link, setLink] = useState("")
  const history = useHistory();

  function whatUserNamed(e){
    setBeerName(e.target.value)
  }

  function whatUserImaged(e){
    setImage(e.target.value)
  }

  function whatUserManu(e){
    setManufacturer(e.target.value)
  }

  function typeSelected(e){
    setTypeOfBeer(e.target.value)
  }

  function stateSelected(e){
    setBreweryState(e.target.value)
  }

  function userFlavorProfile(e){
    setFlavorProfile(e.target.value)
  }

  function userLink(e){
    setLink(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newBeerData = {
        name: beerName,
        image: image,
        manufacturer: manufacturer,
        type: typeOfBeer,
        breweryState: breweryState,
        link: link,
        flavorProfile: flavorProfile,
        likes: 0
    }
    fetch('http://localhost:3000/beers', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newBeerData)
    })
      .then(res => res.json())
      .then(newBeerData => {
          onAddBeer(newBeerData)
          history.push("/beerPage")
        })
  }

  return (
    <div>
      <h2>Add a Beer</h2>
      <form onSubmit={handleSubmit}>
        <input value={beerName} onChange={whatUserNamed} type="text" placeholder="Beer name"></input>
        <input value={image} onChange={whatUserImaged} type="url" placeholder="Beer Image"></input>
        <input value={manufacturer} onChange={whatUserManu} type="text" placeholder="Brewer Name"></input>
        <input value={link} onChange={userLink} type="url" placeholder="Brewer URL"></input>
        <select value={typeOfBeer} onChange={typeSelected}name="type-filter">
          <option value="All">Select Type</option>
          <option value="Brown Ale">Brown Ale</option>
          <option value="Double IPA">Double IPA</option>
          <option value="IPA">IPA</option>
          <option value="Lager">Lager</option>
          <option value="Pale Ale">Pale Ale</option>
          <option value="Pilsner">Pilsner</option>
          <option value="Porter">Porter</option>
          <option value="Saison">Saison</option>
          <option value="Sour">Sour</option>
          <option value="Stout">Stout</option>
        </select>
        <select value={breweryState} onChange={stateSelected} name="state-filter" >
          <option value="All">Select a State</option>
          <option value="MI">Michigan</option>
          <option value="MO">Missouri</option>
          <option value="NY">New York</option>
          <option value="VT">Vermont</option>
        </select>
        <input value={flavorProfile} onChange={userFlavorProfile} type="text" placeholder="Flavor Notes"></input>
        <button>Submit new beer</button>
      </form>
    </div>
  )
}

export default AddBeerForm;