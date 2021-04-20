import BeerList from "./BeerList";
import Filter from "./Filter";
import Search from "./Search";

function BeerPage({beerArr, onCategoryChange, searchBeer, onSearch}){
  return (
    <div>
      <div id="filterSearch">
      <Filter onCategoryChange={onCategoryChange}/>
      <Search 
        searchBeer={searchBeer}
        onSearch={onSearch}/>
        </div>
      <BeerList
        beerArr={beerArr} />
    </div>
  )
}

export default BeerPage;