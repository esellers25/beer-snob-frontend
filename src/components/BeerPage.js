import BeerList from "./BeerList";
import Filter from "./Filter";
import Search from "./Search";
import {useState, useEffect} from "react"

function BeerPage(){
  const [beerArr, setBeerArr] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchBeer, setSearchBeer] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/beers?_embed=review')
      .then(res => res.json())
      .then(beerData => setBeerArr(beerData))
  }, [beerArr])

  function onCategoryChange(selectedCategory){
    setSelectedCategory(selectedCategory)
  }

  const beersToDisplay = beerArr.filter((beer) => {
    if (selectedCategory === "All") { 
      return true} 
    if (selectedCategory === beer.type) {
      return beer.type
    }
    if (selectedCategory === beer.breweryState) {
      return beer.breweryState
    }
  })

  function handleSearch(e){
    setSearchBeer(e)
  }

  const searchedBeerArr = beersToDisplay.filter((beer) => {
    if (beer.name.toLowerCase().includes(searchBeer.toLowerCase())
    || beer.type.toLowerCase().includes(searchBeer.toLowerCase())
    || beer.manufacturer.toLowerCase().includes(searchBeer.toLowerCase())
    || beer.flavorProfile.toLowerCase().includes(searchBeer.toLowerCase()))
    return true
  })

  return (
    <div>
      <div id="filterSearch">
      <Filter onCategoryChange={onCategoryChange}/>
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