function AddBeerForm(){
    return (
        <div>
            <h1>Add a Beer</h1>
            <form>
                <input type="text" placeholder="Beer name"></input>
                <input type="url" placeholder="Beer Image"></input>
                <input type="text" placeholder="Manufacturer"></input>
                <input type="text" placeholder="Type"></input>
                <input type="text" placeholder="Brewery State"></input>
                <input type="text" placeholder="tasting notes"></input>
                <button>Submit new beer</button>
            </form>
        </div>
        
    )
}

export default AddBeerForm;