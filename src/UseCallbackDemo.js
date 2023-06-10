import './App.css';

import List from './List.js'

// useState is a hook 
// useMemo is a hook for memoisation.
import React, {useState, useMemo} from 'react';


/*


*/
export default function App() {

  // this useState hook is always called !
  const [number , setNumber] = useState(1)

  const [dark, setDark] = useState(false)

// suppose its calling an API.
const getItems = () => {

  return [number, number +1, number +2]

}

  const theme = {
      backgroundColor: dark ? '#333' : '#FFF',
      color: dark ? '#FFF' : '#333'
  }


  return (
<>

<div style={theme}>
<input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />

<button onClick={() => setDark(prevDark => !prevDark)}> Toggle Theme </button>

<List getItems={getItems} />

</div>
</>
  )
}


function slowFunction(num){
  console.log("Calling the slow function")
for(let i=0; i<=100000000; i++){}
return num * 2;

}



