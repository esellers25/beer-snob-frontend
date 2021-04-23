import MyFridge from "./MyFridge";
import BeerList from "./BeerList";
import Search from "./Search";
import Filter from "./Filter";
import Sort from "./Sort";
import {useState, useEffect} from "react"
import { Grid, Menu, Segment, Sidebar } from 'semantic-ui-react'

function BeerPage(){
  const [beerArr, setBeerArr] = useState([])
  const [selectedType, setSelectedType] = useState("All")
  const [selectedState, setSelectedState] = useState("All")
  const [searchBeer, setSearchBeer] = useState("")
  const [myFridge, setMyFridge] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    fetch('https://beer-snob-phase-2.herokuapp.com/beers?_embed=review')
      .then(res => res.json())
      .then(beerData => setBeerArr(beerData))
  }, [])

  function onTypeChange(selectedType) {
    setSelectedType(selectedType)
  }

  function onStateChange(selectedState) {
    setSelectedState(selectedState)
  }

  function sortByName(){
    const beersNameArr = beerArr.sort((a, b) =>{
      return a.name.localeCompare(b.name)
    })
    return setBeerArr([...beersNameArr])
  }

  function sortByLikes(){
    const beersLikesArr = beerArr.sort((a,b) => {
      return b.likes - a.likes
    })
    return setBeerArr([...beersLikesArr])
  }

  const beersByState = beerArr.filter((beer) => {
    if (selectedState === "All") { 
      return true 
    } else { return selectedState === beer.breweryState}
  })
  
  const beersByTypeAndState = beersByState.filter((beer) => {
    if (selectedType === "All") {
      return true
    } else { return selectedType === beer.type }
  })

  function handleSearch(e){
    setSearchBeer(e)
  }

  const searchedBeerArr = beersByTypeAndState.filter((beer) => {
    if (beer.name.toLowerCase().includes(searchBeer.toLowerCase())){
      return true
    } else if (beer.type.toLowerCase().includes(searchBeer.toLowerCase())){
      return true
    } else if (beer.manufacturer.toLowerCase().includes(searchBeer.toLowerCase())){
      return true
    } else {return (beer.flavorProfile.toLowerCase().includes(searchBeer.toLowerCase()))}
  })

  function handleAddToFridge(beerToAdd){
    const newFridgeBeer = beerArr.find((beer) => beer.id === beerToAdd.id)
    setMyFridge([...myFridge, newFridgeBeer])  
  }

  function handleDeleteFromFridge(id){
      const updatedFridgeArr = myFridge.filter(beer => 
        beer.id !== id)
        setMyFridge(updatedFridgeArr)
  }


  
  return (
      <Grid columns={1}>
      <Grid.Column>
      <h2 id="fridgelink" onClick={e => setVisible(!visible)}>My Fridge</h2>
      </Grid.Column>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <MyFridge myFridge={myFridge} onDeleteBeer={handleDeleteFromFridge}/>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
            <div id="filterSearch" class="pusher">
              <Search 
                searchBeer={searchBeer}
                onSearch={handleSearch}/>
              <Filter onTypeChange={onTypeChange}
                onStateChange={onStateChange}/>
              <Sort 
                sortByLikes={sortByLikes}
                sortByName={sortByName}/>
            </div>
            <BeerList
              beerArr={searchedBeerArr}
              onAddToFridge={handleAddToFridge} />
              </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default BeerPage;