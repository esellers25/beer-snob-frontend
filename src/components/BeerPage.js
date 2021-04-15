import BeerList from "./BeerList";
import Filter from "./Filter";
import Search from "./Search";

function BeerPage(){
    return (
        <div>
            <h1>BEER Page</h1>
            <Filter />
            <Search />
            <BeerList />
        </div>
    )
}

export default BeerPage;