function Filter({onStateChange, onTypeChange}){
    
  function handleStateChange(e){
    onStateChange(e.target.value)
  }

  function handleTypeChange(e){
    onTypeChange(e.target.value)
  }
    
  return (
    <div id="filter" className="arrayModifier">
      <div>
        <h2>Filter</h2>
      </div>
      <div >
        <select class="ui selection dropdown" name="state-filter" onChange={handleStateChange}>
          <option value="All">Filter by State</option>
          <option value="MI">Michigan</option>
          <option value="MO">Missouri</option>
          <option value="NY">New York</option>
          <option value="VT">Vermont</option>
        </select>
        <select class="ui selection dropdown" name="type-filter" onChange={handleTypeChange}>
          <option value="All">Filter by Type</option>
          <option value="Brown Ale">Brown Ale</option>
          <option value="Double IPA">Double IPA</option>
          <option value="IPA">IPA</option>
          <option value="Lager">Lager</option>
          <option value="Pale Ale">Pale Ale</option>
          <option value="Pilsner">Pilsner</option>
          <option value="Porter">Porter</option>
          <option value="Saison">Saison</option>
          <option value="Sour">Sour</option>
          <option value="Stout">Stout</option>
        </select>
      </div>
    </div>
  )
}

export default Filter;