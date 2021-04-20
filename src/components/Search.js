function Search({onSearch, searchBeer}){
  return (
    <div id="search" className="arrayModifier">
      <div>
        <h2>Search</h2>
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