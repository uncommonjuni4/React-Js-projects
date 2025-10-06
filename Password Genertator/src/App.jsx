import { useState ,useCallback ,useEffect,useRef} from 'react'
import './App.css'

function App() {
 const [number,setNumber] = useState(8);
 const [numberAllowed,setNumberAllowed]  =useState(false);
 const [charAllowed,setCharAllowed]   = useState(false);
 const [Password,setPassword]  = useState("");

 const passwordGenertator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed){
    str+= "0123456789";
  }
  if(charAllowed){
    str+= "$%#&*(){}[]!";
    };

    for (let i = 1; i <= number; i++) {

      let char  = Math.floor(Math.random() * str.length +1)
      
      pass += str.charAt(char)
    }

    setPassword(pass)

   
 },[number ,numberAllowed,charAllowed,setPassword])


 useEffect(()=>{
  passwordGenertator()
 },[length,numberAllowed,charAllowed,passwordGenertator])
 

 ///use ref hook

 let passwordreef = useRef(null);



 let copypasswordToclip =useCallback(()=>{
  passwordreef.current?.select();
  window.navigator.clipboard.writeText(Password)
 },[Password])
  return (
    <>
    <div className='w-full mx-auto  max-w-md  shadow-md rounded-lg px-4 my-8 text-white bg-gray-600'>
      <h1 className='text-white text-center  my-4 '>Password Genertator</h1>
      <div className='flex rounded-lg shadow overflow-hidden   mb-4'>
        <input type="text"
        value={Password}
        className='outline-none w-full bg-white  text-red-700 py-4 px-3'
        placeholder='Password'
        readOnly
        ref={passwordreef} />
        <button className='bg-blue-600 px-3 py-0.5  shrink-0 outline-none'   onClick={copypasswordToclip}>Copy</button>
      </div>
      <div className='flex gap-x-1 text-sm'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={number}
          className='cursor-pointer'
          onChange={(e)=>{setNumber(e.target.value)}}
           />
           <label>
            Length:{number}
           </label>
        </div>
        <div  className='flex items-center gap-x-1'>
     <input 
     type="checkbox"
     defaultChecked ={numberAllowed}
     id='numberinput'
     onChange={()=>{
      setNumberAllowed((prev)=> !prev)
     }} />
     <label >Numbers</label>
        </div>
        <div  className='flex items-center gap-x-1'>
     <input 
     type="checkbox"
     defaultChecked ={charAllowed}
     id='charinput'
     onChange={()=>{
      setCharAllowed((prev)=> !prev)
     }} />
     <label >Characters</label>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default App
