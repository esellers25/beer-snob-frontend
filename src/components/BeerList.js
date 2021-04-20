import BeerCard from "./BeerCard";

function BeerList({beerArr}){
  const beerArray = beerArr.map(beerObj => 
    <BeerCard key={beerObj.id} beer={beerObj}/>)
      return (
        <div class="ui link cards">
          <h2>Beer List</h2>
          {beerArray}
        </div>
      )
}

export default BeerList;