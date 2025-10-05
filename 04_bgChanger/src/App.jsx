import { useState } from "react"


function App() {
 const [color,setColor] =useState("olive");

 let red = ()=>{
  setColor("red")
 }

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
        <button  onClick={()=>setColor("green")} className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"green"}}>Green</button>
        <button  onClick={red} className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("blue")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>setColor("yellow")}  className="px-5 py-2 text-black rounded-full" style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("orange")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=>setColor("pink")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>setColor("Tomato")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"Tomato"}}>Tomato</button>
        <button onClick={()=>setColor("black")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"black"}}>Black</button>
        <button onClick={()=>setColor("Gray")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"Gray"}}>Gray</button>
        <button onClick={()=>setColor("DodgerBlue")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"DodgerBlue"}}>DodgerBlue</button>
        <button onClick={()=>setColor("Purple")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"Purple"}}>Purple</button>
        <button onClick={()=>setColor("Brown")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"Brown"}}>Brown</button>
        <button onClick={()=>setColor("Cyan")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"Cyan"}}>Cyan</button>
        <button onClick={()=>setColor("Teal")}  className="px-5 py-2 text-white rounded-full" style={{backgroundColor:"Teal"}}>Teal</button>
         </div>
      </div>
    </div>
  )
}

export default App
