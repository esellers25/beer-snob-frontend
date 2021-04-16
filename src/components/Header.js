import {NavLink} from "react-router-dom"
import {useHistory} from "react-router-dom"

function Header(){
  const history = useHistory()
  
  function handleHomeClick(){
      history.push("/")
  }
  return (
    <div>
      <h1 onClick={handleHomeClick}>Beer Snob</h1>
      <nav>
        <NavLink className="button" to="/beerPage">View and Search Beers</NavLink>
        <NavLink className="button" to="/addBeer">Add a Beer</NavLink>
      </nav>
    </div>
  )
}

export default Header;