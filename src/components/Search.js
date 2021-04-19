function Search({onSearch, searchBeer}){
    
    
    return (
        <div>
            <h1>Search</h1>
            <input type="text" id="search" placeholder="Search by name, type, flavor..." value={searchBeer} onChange={e => onSearch(e.target.value)}></input>
        </div>
        
    )
}

export default Search;