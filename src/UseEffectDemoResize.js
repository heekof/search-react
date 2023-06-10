import './App.css';

import List from './List.js'

// useState is a hook 
// useMemo is a hook for memoisation.
import React, {useState, useEffect} from 'react';


/*


*/
export default function App() {

  // this useState hook is always called !
  const [windowWidth , setWindowWidth] = useState(window.innerWidth)


const handleResize = () => {

  setWindowWidth(window.innerWidth)

}


  useEffect( () => {

    // Adding an event listener
    window.addEventListener('resize', handleResize)

  }, [] )

  return (
<>

<div >
{windowWidth}

</div>





</>
  )
}





