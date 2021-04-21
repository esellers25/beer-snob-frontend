import {useState, useEffect} from "react"
import AddBeerForm from './AddBeerForm'
import BeerPage from './BeerPage'
import Header from './Header'
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import BeerDetail from "./BeerDetail"
import { createGlobalStyle } from "styled-components"


const GlobalStyle= createGlobalStyle`
  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 8em;
  }
  h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 4em;
  }
  a {
    font-family: 'Bebas Neue', cursive;
    font-size: 2em;
    padding-right: 15px
  }
  p.welcome {
    font-family: 'Crimson Text', serif;
    font-size: 2em
  }
  body{
    background-color: white
  }
  h3 {
    font-family: 'Bebas Neue', cursive;
    font-size: 2em;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addBeer">
          <AddBeerForm />
        </Route>
        <Route exact path="/beerPage">
          <BeerPage />
        </Route>
        {/* <Route exact path="/beerDetail/:id">
          <BeerDetail />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App;
