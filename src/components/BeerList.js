import {useState} from "react"
import BeerCard from "./BeerCard";

function BeerList({beerArr}){
    const beerArray = beerArr.map(beerObj => 
        <BeerCard key={beerObj.id} beer={beerObj}/>)
    return (
        <div>
            <h1>BEER LIST</h1>
            {beerArray}
        </div>
    )
}

export default BeerList;