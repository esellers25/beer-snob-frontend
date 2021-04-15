import BeerList from "./BeerList";
import Filter from "./Filter";
import Search from "./Search";

function BeerPage({beerArr}){
    return (
        <div>
            <h1>BEER Page</h1>
            <Filter />
            <Search />
            <BeerList
            beerArr={beerArr} />
        </div>
    )
}

export default BeerPage;