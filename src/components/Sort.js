function Sort({sortByName, sortByLikes}){
  
    
    return (
        <div>
            <div>
            <h3>SORT</h3>
            </div>
            
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