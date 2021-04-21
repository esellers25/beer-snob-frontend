function Sort({sortByName, sortByLikes}){
  
    
    return (
        <div>
            <h3>SORT</h3>
            <label>
                <input type="radio" name="sort" onChange={sortByName}
                />
                Name A-Z
            </label>
            <label>
                <input type="radio" name="sort" onChange={sortByLikes}
                />
                Most Liked
            </label>
        </div>
    )
}

export default Sort;