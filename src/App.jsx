import { useState } from "react"
import { Register } from './Register'
import { Success } from './forms/Success'
import './App.css'
function App() {
  const [allValid, setAllValid] = useState(false);
  const signInValue = (errors) => {
    const allValid = Object.values(errors).every(err => err === false);
    setAllValid(allValid);
    console.log(allValid)
  };
  return !allValid ? <Register onSubmit={signInValue} /> : <Success />

}

export default App
