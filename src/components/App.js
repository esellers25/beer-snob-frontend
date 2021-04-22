import Home from "./Home"
import Header from './Header'
import BeerPage from './BeerPage'
import AddBeerForm from './AddBeerForm'
import {Switch, Route} from "react-router-dom"
import { createGlobalStyle } from "styled-components"

const GlobalStyle= createGlobalStyle`
  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 8em;
    color: #1D2731;
    margin-bottom: 0;
    cursor: pointer;
  }

  h1:hover {
    color: #1e70bf;
  }

  h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 4em;
    color: #f7882F;
    padding-top: 20px
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
    color: #1d2731;
    text-align: center;
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
      </Switch>
    </div>
  )
}

export default App;
