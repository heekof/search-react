import './App.css';

// useState is a hook 

// useMemo is a hook for memoisation.
import React, {useState, useMemo} from 'react';


/*

When you render the app aka change the state using useState all the function
gets called. 

If you have a slow function in the code it might bottleneck.

*/
export default function App() {

  // this useState hook is always called !
  const [number , setNumber] = useState(0)

  const [dark, setDark] = useState(false)

  // gets called automatically always 
  // function memoised using useMemo hook
  const doubleNumber = useMemo( () => {return slowFunction(number)}, [number] )

  const themeStyles = {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
  }


  return (
<>

<input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />

<button onClick={() => setDark(prevDark => !prevDark)}> Change Theme </button>

<div style={themeStyles}>{doubleNumber}</div>
</>
  )
}


function slowFunction(num){
  console.log("Calling the slow function")
for(let i=0; i<=100000000; i++){}
return num * 2;

}



