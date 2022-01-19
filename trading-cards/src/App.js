import './App.css';
import Cardbody from './Components/Cardbody'
import Grid from '@mui/material/Grid';


function App() {

  
  const Psycho = [{
    name: 'Name: Mob ',
    age: 'Age: 14 ',
    power: 'Power: ??? Telekinesis: Mobs most used power is his ability to move objects with his mind. Using this, Mob can levitate an entire building with ease, and tear apart objects on the molecular level. ',
    image: 'https://comicvine.gamespot.com/a/uploads/scale_medium/11117/111178336/5488203-3438117631-4vw5T.jpg',
  },

  {
    name: 'Name: Reign ',
    age:'Age: 24 ',
    power: 'Power: 1000 ',
    image: 'https://i.pinimg.com/564x/0e/a6/fe/0ea6fedecc2801ec66b2946396295a76.jpg',

  },
  
  {
    name: 'Name: Teruki ',
    age: 'Age: 15 ',
    power: 'Power: 100',
    image: 'https://i.pinimg.com/originals/2c/7b/39/2c7b39558cb3afca7e3a1e0a544895b1.jpg',

  }
]
  
  return (
    <div className="App">
      <Grid container >
      <h1>
         MOB Psycho Trading  
         Cards
      </h1>
      {Psycho.map(Psycho=> {
        return( 
        <Cardbody 
         name={Psycho.name}
         age={Psycho.age}
         power={Psycho.power}
         image={Psycho.image}
        />)
      })}
     </Grid>
    </div>
  );
}

export default App;
