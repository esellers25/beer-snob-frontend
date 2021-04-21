import {NavLink} from "react-router-dom"
import {useHistory} from "react-router-dom"

function Header(){
  const history = useHistory()
  
  function handleHomeClick(){
      history.push("/")
  }
  return (
    <div className="header">
      <h1 onClick={handleHomeClick}>Beer Snob</h1>
      <nav>
        <NavLink className="button" to="/beerPage">Discover Beers</NavLink>
        <NavLink className="button" to="/addBeer">Add a Beer</NavLink>
      </nav>
    </div>
  )
}

export default Header;