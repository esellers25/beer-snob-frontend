import {useState} from "react"
import BeerCard from "./BeerCard";

function BeerList({beerArr}){
    const beerArray = beerArr.map(beerObj => 
        <BeerCard key={beerObj.id} beer={beerObj}/>)
    return (
        <div class="ui link cards">
            <h1>Beer List</h1>
            {beerArray}
        </div>

    )
}

export default BeerList;