function Search({onSearch, searchBeer}){
  return (
    <div className="arrayModifier">
      <div>
        <h3>Search</h3>
      </div>
      <div class= "ui input" >
        <input 
          type="text" 
          id="search" 
          placeholder="Search by name, type, flavor..." 
          value={searchBeer} 
          onChange={e => onSearch(e.target.value)}
        ></input>
        <i class="search icon"></i>
      </div>
    </div>
  )
}

export default Search;