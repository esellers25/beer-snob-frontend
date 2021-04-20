function Search({onSearch, searchBeer}){
  return (
    <div className="arrayModifier">
      <h2>Search</h2>
        <input 
          type="text" 
          id="search" 
          placeholder="Search by name, type, flavor..." 
          value={searchBeer} 
          onChange={e => onSearch(e.target.value)}
        ></input>
      </div>
  )
}

export default Search;