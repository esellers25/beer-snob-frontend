function Sort({sortByName, sortByLikes}){
  return (
    <div className="arrayModifier">
      <div>
        <h3>SORT</h3>
      </div>
      <div id="sortLabelDiv">
        <label>
          <input type="radio" name="sort" onChange={sortByName}/>
          Name A-Z
        </label>
          <label>
          <input type="radio" name="sort" onChange={sortByLikes}/>
          Most Liked
        </label>
      </div>
    </div>
  )
}

export default Sort;