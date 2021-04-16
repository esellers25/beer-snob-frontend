import BeerList from "./BeerList";
import Filter from "./Filter";
import Search from "./Search";

function BeerPage({beerArr, onCategoryChange, searchBeer, onSearch}){
    return (
        <div>
            <h1>BEER Page</h1>
            <Filter onCategoryChange={onCategoryChange}/>
            <Search 
            searchBeer={searchBeer}
            onSearch={onSearch}/>
            <BeerList
            beerArr={beerArr} />
        </div>
    )
}

export default BeerPage;