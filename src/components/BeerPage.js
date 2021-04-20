import BeerList from "./BeerList";
import Filter from "./Filter";
import Search from "./Search";
import {useState, useEffect} from "react"

function BeerPage(){
  const [beerArr, setBeerArr] = useState([])
  const [selectedType, setSelectedType] = useState("All")
  const [selectedState, setSelectedState] = useState("All")
  const [searchBeer, setSearchBeer] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/beers?_embed=review')
      .then(res => res.json())
      .then(beerData => setBeerArr(beerData))
  }, [])

  function onTypeChange(selectedType) {
    setSelectedType(selectedType)
  }

  function onStateChange(selectedState) {
    setSelectedState(selectedState)
  }

  const beersByState = beerArr.filter((beer) => {
    if (selectedState === "All") { 
      return true 
    } if (selectedState === beer.breweryState) 
      return beer.breweryState
  })
  
  const beersByTypeAndState = beersByState.filter((beer) => {
    if (selectedType === "All") {
      return true
    }
    if (selectedType === beer.type) 
       return beer.type
  })

  function handleSearch(e){
    setSearchBeer(e)
  }

  const searchedBeerArr = beersByTypeAndState.filter((beer) => {
    if (beer.name.toLowerCase().includes(searchBeer.toLowerCase())
    || beer.type.toLowerCase().includes(searchBeer.toLowerCase())
    || beer.manufacturer.toLowerCase().includes(searchBeer.toLowerCase())
    || beer.flavorProfile.toLowerCase().includes(searchBeer.toLowerCase()))
    return true
  })

  return (
    <div>
      <div id="filterSearch">
      <Filter onTypeChange={onTypeChange}
      onStateChange={onStateChange}/>
      <Search 
        searchBeer={searchBeer}
        onSearch={handleSearch}/>
        </div>
      <BeerList
        beerArr={searchedBeerArr} />
    </div>
  )
}

export default BeerPage;