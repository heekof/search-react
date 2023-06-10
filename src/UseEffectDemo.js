import './App.css';

import List from './List.js'

// useState is a hook 
// useMemo is a hook for memoisation.
import React, {useState, useEffect} from 'react';


/*


*/
export default function App() {

  // this useState hook is always called !
  const [resourceType , setResourceType] = useState('posts')
  const [forceUpdate, handleClick] = useState(0); // This is new
  const[items, setItems] = useState([])

  useEffect(() => {console.log('Render')})

  

  useEffect(() => {

    console.log("Resource type changed")

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

  }, [resourceType] )


    useEffect(() => {

    console.log("On Mount")

  }, [] )


  const handleClickGlob = (type) => {

    setResourceType(type)
    // forcing the rendering !!!
    handleClick(prev => prev +1)

      }


  return (
<>

<div >

<button onClick={() => handleClickGlob('posts')}> Posts </button>
<button onClick={() => handleClickGlob('users')}> Users </button>
<button onClick={() => handleClickGlob('comments')}> Comments </button>
</div>

<h1>{items.map(item => {
   return  <pre> {JSON.stringify(item)} </pre>   
   })}
   </h1>



</>
  )
}





