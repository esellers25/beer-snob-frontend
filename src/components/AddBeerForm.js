import {useState} from "react"
import {useHistory} from "react-router-dom"
import { Input } from 'semantic-ui-react'

function AddBeerForm(){
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
    fetch('https://beer-snob-phase-2.herokuapp.com/beers', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newBeerData)
    })
      .then(res => res.json())
      .then(newBeerData => {
          history.push("/beerPage")
        })
  }

  return (
    <div>
      <h2>Add a Beer</h2>
      <p className="welcome">Don't see a beer you love? Please add it to our collection so others can discover it!</p>
      <section>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="label">Beer Name</label>
          <Input className="input" id="username" value={beerName} onChange={whatUserNamed} type="text" placeholder="Beer name"></Input>
          <label htmlFor="userimage" className="label">Beer Picture</label>
          <Input className="input" label='http://' id="userimage" value={image} onChange={whatUserImaged} type="url" placeholder="Beer Image URL"></Input>
          <label htmlFor="usermanufacturer" className="label">Brewer Name</label>
          <Input className="input" id="usermanufacturer" value={manufacturer} onChange={whatUserManu} type="text" placeholder="Brewer Name"></Input>
          <label htmlFor="userbreweryURL" className="label">Brewer Website</label>
          <Input className="input" label='http://' id="userbreweryURL" value={link} onChange={userLink} type="url" placeholder="Brewer URL"></Input>
          <label htmlFor="usertype" className="label">Type of Beer</label>
          <select className="input" id="usertype" value={typeOfBeer} onChange={typeSelected}name="type-filter">
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
          <label htmlFor="userbrewerystate" className="label">Brewery State</label>
          <select className="input" id="userbrewerystate" value={breweryState} onChange={stateSelected} name="state-filter" >
            <option value="All">Filter by State</option>
            <option value="All">All States</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Lousiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="MM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <label htmlFor="userflavorprofile" className="label">Flavor Profile</label>
          <Input className="input" id="userflavorprofile" value={flavorProfile} onChange={userFlavorProfile} type="text" placeholder="Flavor Notes"></Input>
          <button class="ui button">Submit new beer</button>
        </form>
      </section>
    </div>
  )
}

export default AddBeerForm;