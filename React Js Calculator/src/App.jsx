import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [final , setFinal] =useState("Please Perform Some Caculation");
  let [value1, setValue1] = useState(0);
  let [value2 ,setValue2]  =useState(40);

   

  let addValue= ()=>{
     value1 = value1 +1;
      setValue1(value1)
     
  }

  let removeValue =()=>{
     if(value2 >0){
      value2 = value2 - 1;
      setValue2(value2);
     }else{
      setValue2("Please Enter value  gerater than 0")
     }
     }

     let sum =()=>{
       final= value1 + value2
       setFinal(final)
     }

     let sub = ()=>{
      if(value1 >  value2){
        final= value1 - value2;
    setFinal(final)
      }else{
     final= value2 - value1;
    setFinal(final)
      }
 
    
     }

     let multi =()=>{
      if(value1 > value2){
              final = value1 * value2
      setFinal(final)
      }
      final = value2 * value1
      setFinal(final)
     }

     let divide=()=>{
      if(value1 > value2){
        final = value1 /value2
        setFinal(final)
      }else{
        final = value2 /value1
        setFinal(final)
      }
     }

     let mod =()=>{
      if(value1 >value2){
        final = value1 % value1
        setFinal(final)
      }else{
         final = value2 % value1
        setFinal(final)
      }
     }

     let sq = ()=>{
      if (value1 > value2){
        final = value1 * value1;
        setFinal(final)
      }else{
        final = value2 * value2
        setFinal(final)
      }
     }

     let cube=()=>{
      if(value1 > value2){
        final = value1 *value1*value1
        setFinal(final)
      }else{
        final = value2 * value2 * value2     
        setFinal(final)
       }
      
     }

  return (
    <>
      <div>
      
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>React Calculator</h1>
        <h3>Click the Button Below to Perform Some Calulation</h3>
        <h1>Final Result ={final}</h1>
        <button onClick={sum}>Sum Button</button> 
        <button onClick={sub}>Sub Button</button>
        <button onClick={multi}>Multi Button</button>
        <button onClick={divide}>Divide Button</button>
        <button onClick={mod}>Modulus button</button>
        <button onClick={sq}>sq button</button>
        <button onClick={cube}>Cube button</button>
        <br />
        <h3>Here Are Some button TO set value You want</h3>
        <p>You can set Value in given Limits</p>
        <h3>Please Read the Condtition Carefully Before Find Sqaure and Cube of Numbers:</h3>
        <p>"(If the value of increase is gerater than decrease value than you the squre and cube of increase value otherwiese you take square and Cube pf decrease value)"</p>
        <br />
        <span>Increae value = {value1}</span>
        <button onClick={addValue}>Increase Button </button>
        <br />
        <br />
        <span> Decrease value = {value2} </span>
        <button onClick={removeValue}>Decrease Button</button>
       <br />
       <br />
       <h1>Final Answer ={final}</h1>
      </div>
    </>
  )
}

export default App
