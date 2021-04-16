import {useState, useEffect} from "react"
import AddBeerForm from './AddBeerForm';
import BeerPage from './BeerPage';
import Header from './Header';
import {Switch, Route} from "react-router-dom"
import Home from "./Home"

function App() {
  const [beerArr, setBeerArr] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchBeer, setSearchBeer] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/beers?_embed=review')
      .then(res => res.json())
      .then(beerData => setBeerArr(beerData))
  }, [])

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

  const searchedBeersArr = beersToDisplay.filter((beer) => {
    return beer.name.toLowerCase().includes(searchBeer.toLowerCase())
  })

  function onAddBeer(newBeer){
    setBeerArr([...beerArr, newBeer])
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addBeer">
          <AddBeerForm onAddBeer={onAddBeer}/>
        </Route>
        <Route exact path="/beerPage">
          <BeerPage 
            beerArr={searchedBeersArr}
            onCategoryChange={onCategoryChange}
            onSearch={handleSearch}
            searchBeer={searchBeer}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
