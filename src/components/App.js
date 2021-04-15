import {useState, useEffect} from "react"
import AddBeerForm from './AddBeerForm';
import BeerPage from './BeerPage';
import Header from './Header';

function App() {
  const [beerArr, setBeerArr] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/beers?_embed=review')
      .then(res => res.json())
      .then(beerData => setBeerArr(beerData))
  }, [])
  
  return (
    <>
      <Header />
      <AddBeerForm />
      <BeerPage 
      beerArr={beerArr}/>
    </>
  );
}

export default App;
