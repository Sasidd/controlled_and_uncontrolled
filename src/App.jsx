import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';
import AppContext from './AppContext';
import { useRef, useState } from 'react';

function App() {

  const [name , setName] = useState('')
  const [age , setAge] = useState('')

  const objref=useRef()
  console.log(objref);

  const handleChange=(e)=>{
    e.target.name=='name'?setName(e.target.value):setAge(e.target.value)
  }

  const refObj=()=>{
    console.log(objref.current.value);
  }
  return (
    <>
    {/* <AppContext>
      <Form/>
      <Card/>
      </AppContext> */}
      <form>
        <input type="text" name="name" value={name} onChange={handleChange} placeholder='name' />
        <input type="number" name="age" value={age} onChange={handleChange} placeholder='age'/>
        <input type="text" name="ref" ref={objref} onChange={refObj} />
      </form>
    </>
  );
}

export default App;
