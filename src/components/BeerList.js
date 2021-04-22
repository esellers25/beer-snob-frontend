import BeerCard from "./BeerCard";

function BeerList({beerArr, onAddToFridge}){
  const beerArray = beerArr.map(beerObj => 
     <BeerCard key={beerObj.id} beer={beerObj} onAddToFridge={onAddToFridge}/>)
      return (
        <div>
          <div>
            <h2>Beer List</h2>
          </div>
          <div class="ui link four cards">
            {beerArray.length > 0 ? beerArray : <p className="welcome">We don't have that beer. Add it to our collection!</p>}
          </div>
        </div>
      )
}

export default BeerList;