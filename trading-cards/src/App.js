import './App.css';
import Cardbody from './Components/Cardbody'
import Grid from '@mui/material/Grid';
import { spacing } from '@mui/system';

function App() {

  
  const Psycho = [{
    name: 'Name: Mob ',
    age: 'Age: 14 ',
    power: 'Power: ??? Telekinesis: Mobs most used power is his ability to move objects with his mind. Using this, Mob can levitate an entire building with ease, and tear apart objects on the molecular level. ',
    image: 'https://thumbs.gfycat.com/BrownAmpleIndigobunting-max-1mb.gif',
  },

  {
    name: 'Name: Reign ',
    age:'Age: 27 ',
    power: 'Power: 1000   He is the self-proclaimed "Greatest Psychic of the 21st Century" as well as owner and operator of the Spirits and Such Consultation Office ',
    image: 'https://data.whicdn.com/images/260339210/original.gif',

  },
  
  {
    name: 'Name: Teruki ',
    age: 'Age: 15 ',
    power: 'Power: 10000 Psychic Powers: Teruki is a natural born esper, and as such, he possesses a wide range of psychic abilities. He excels at Telekinesis, the ability to move objects with his mind. He can use Telekinesis to launch objects, restrain enemies, and attack in a slash-like fashion.',
    image: 'https://img.wattpad.com/fcdf18356209eddf2f814eb2787e5e74e0e00f70/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f694d4c6d6454457042713762673d3d2d3935333138363831382e313633363231346463376238306437323439343134353638393530352e676966',

  },
 
]
  
  return (

  <><div>
    <h1>
       MOB Psycho Trading Cards
    </h1>
    </div>
    
    <div className="App">
        <Grid container spacing={3}>
          
          {Psycho.map(Psycho => {
            return (
              <Cardbody
                name={Psycho.name}
                age={Psycho.age}
                power={Psycho.power}
                image={Psycho.image} 
                src={Psycho.src}/>);
          })}
        </Grid>
       
      </div></>
  );
}

export default App;
