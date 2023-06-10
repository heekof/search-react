import './App.css';

import List from './List.js'

// useState is a hook 
// useMemo is a hook for memoisation.
import React, {useState, useEffect} from 'react';


/*

Use Effect  is used as a side effect for modifications.
*/
export default function App() {

  // this useState hook is always called !
  const [resourceType , setResourceType] = useState('posts')
  const [forceUpdate, handleClick] = useState(0); // This is new

  console.log("render")

  useEffect(() => {

    console.log("Resource type changed")

    // code cleanup
  return () => {console.log("Clean up")} 

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

<h1>{resourceType}
   </h1>



</>
  )
}





