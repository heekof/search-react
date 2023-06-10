import logo from './logo.svg';
import './App.css';

// useState is a hook 
/*
useState is a built-in hook in React that allows functional components to manage state. 
It provides a way to declare and update state variables within a functional component, 
giving it the ability to maintain and track changes to data over time.
*/
// hooks can only be used inside a function !
// hooks cannot be nested in anything they must be at the top level of the function.
// their pending for classes is state
import React, {useState} from 'react';

function App() {

  // this useState hook is always called !
  const [count2, setCount2] = useState(2)

  // this useState hooks is called just at the start
  //const [count, setCount] = useState( () => {console.log("Run function"); return 4; } )

  // Called every time we render the page
  const [count, setCount] = useState( callFunction() )

  const [state, setState] = useState({count:4, theme:'blue'})
  const theme = state.theme;
  const count3 = state.count;


  const [email, setEmail] = useState('jaafar@gmail.com')


  function callFunction() {
    console.log("Run function2");
     return 5;
  }


function add_one(){

    // not a good practise
    // setCount(count + 1)
    // a better approach 
    //setCount(prevCount => prevCount +1)
    setState(prevState => { return { ...prevState,count: prevState.count +1 }  })

}

function minus_one() {

  //setCount(count - 1)
    //setCount(prevCount => prevCount -1)

    setState( prevState => { return { ...prevState,count: prevState.count -1} })
}

function set_email(){
  setEmail(prevEmail => prevEmail + "2")
}

  return (
    <div className="App">
      <h1>Hello word</h1>
      <button onClick={minus_one}> - </button>
        <span>{count3}</span>
        <span>{theme}</span>
        <span>{email}</span>

      <button onClick={add_one}> + </button>
    
    
            <button onClick={set_email}> set email </button>
    

    </div>
  );
}

export default App;
