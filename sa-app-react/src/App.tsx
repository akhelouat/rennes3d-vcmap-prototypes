import { useEffect, useState, useRef } from 'react'
import './App.css';
import setup from "./services/vcmap.js";
import Map from './components/Map/Map.jsx';

function App() {
  // const [context, setContext] = useState(null);

  // const setupMap =  async () => {
  //   setContext( await setup());
  // }

  // useEffect(() => {
  //   if(!context) {
  //     setupMap();
  //   }
  // }, []);

  return (
    <div className="App">
      <div className='map'></div>
      <Map />
    </div>
  )
}

export default App;
