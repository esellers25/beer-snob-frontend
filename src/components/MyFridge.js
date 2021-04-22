import { Button, Card, Image } from 'semantic-ui-react'

function MyFridge({myFridge, onDeleteBeer}){

    
    const fridgeArray = myFridge.map(beerObj => {
        function handleClick(){
            onDeleteBeer(beerObj.id)
        }
        return <Card key={beerObj.id}>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={beerObj.image}
          />
          <Card.Header>{beerObj.name}</Card.Header>
          <Card.Meta>{beerObj.manufacturer}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui button'>
            <Button onClick={handleClick} basic color='red'>
              Remove from My Fridge
            </Button>
          </div>
        </Card.Content>
      </Card>
    })
    return(
        <div>
          <h3>MY FRIDGE</h3>
            {fridgeArray}
          </div>
    )
}

export default MyFridge; 