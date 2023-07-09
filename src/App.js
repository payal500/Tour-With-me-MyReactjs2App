import logo from './logo.svg';
import './App.css';
import './index.css';
import Data from './Data';
import {useState} from 'react';
import Tour from './Tour';
function App() {
  const [tours,settours]=useState(Data)
  function removetour(id){
    const newtour=tours.filter(tour=> tour.id !== id);
    settours(newtour);
  }
  if (tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No tour Left</h2>
        <button className='btn-white' onClick={()=>settours(Data)}>Refresh Button</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Tour tours={tours} removetour={removetour}></Tour>
    </div>
  );
}
export default App;
