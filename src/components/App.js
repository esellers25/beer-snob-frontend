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
    color: #1D2731
  }
  h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 4em;
    color: #f7882F
  }
  a {
    font-family: 'Bebas Neue', cursive;
    font-size: 2em;
    padding-right: 15px;
    color: #1D2731
  }
  p.welcome {
    font-family: 'Crimson Text', serif;
    font-size: 2em;
    color: #1d2731
  }
 
  h3 {
    font-family: 'Bebas Neue', cursive;
    font-size: 2em;
    color: #f7882F
  }
  body {
    background-color: #DCC7AA
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
