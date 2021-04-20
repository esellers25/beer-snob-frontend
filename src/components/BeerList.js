import BeerCard from "./BeerCard";

function BeerList({beerArr}){
  const beerArray = beerArr.map(beerObj => 
    <BeerCard key={beerObj.id} beer={beerObj}/>)
      return (
        <div>
          <div>
            <h2>Beer List</h2>
          </div>
          <div class="ui link four cards">
            {beerArray}
          </div>
        </div>
      )
}

export default BeerList;