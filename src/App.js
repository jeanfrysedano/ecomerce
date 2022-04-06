import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import Button from './components/Button/button'

/* import ClassCounter from './componenents/ClassCounter/ClassCounter' */

const App = () => {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
      }

  return (
      <div className="App">
        <NavBar>
        </NavBar >
        <button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'montar contador'} </button>
        { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/> : null }
        

      </div>
  );
}
 
export default App;