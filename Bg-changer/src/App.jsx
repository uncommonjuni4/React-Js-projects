import { useState } from "react"

function App() {
  let [Color,setColor] = useState("black");

  let red = ()=>{
    setColor("red")
  }

  return (
      <div>
         <h1 className="text-center text-4xl  py-12  rounded-full  pt-12 text-yellow-400 bg-pink-600  font-extrabold">Background Color Changer With React Js</h1>
         <h1 className="text-center text-4xl mt-12   font-extrabold" style={{color:"lawngreen"}}>Welcome to JUNI Background Color Changer</h1>
        <div className="w-full h-screen  mt-3" style={{backgroundColor:Color}}>
       
         <div  className="flex py-7 px-7 flex-wrap justify-center fixed top-120  pt-12 rounded-full  gap-5 " style={{backgroundColor:"pink",border:"12px solid black"}}>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={red} style={{backgroundColor:"red"}}>Red </button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("green")}} style={{backgroundColor:"green"}}>Green</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("yellow")}} style={{backgroundColor:"yellow"}}>Yellow</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("pink")}} style={{backgroundColor:"pink",border:"2px solid black"}}>Pink</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("orange")}} style={{backgroundColor:"orange"}}>Orange</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("gray")}} style={{backgroundColor:"gray"}}>Gray</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("blue")}} style={{backgroundColor:"blue"}}>Blue</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("white")}} style={{backgroundColor:"black" ,color:"white"}}>white</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("maroon")}} style={{backgroundColor:"maroon" ,color:"white"}}>Maroon</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("gold")}} style={{backgroundColor:"gold"}}>Gold</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("coral")}} style={{backgroundColor:"coral"}}>Coral</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("olive")}} style={{backgroundColor:"olive"}}>Olive</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("darkmagenta")}} style={{backgroundColor:"darkmagenta"}}>Darkmagenta</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("skyblue")}} style={{backgroundColor:"skyblue"}}>Skyblue</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("deeppink")}} style={{backgroundColor:"deeppink"}}>deeppink</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("hotpink")}} style={{backgroundColor:"hotpink"}}>Hotpink</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("aqua")}} style={{backgroundColor:"aqua"}}>Aqua</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("chocolate")}} style={{backgroundColor:"chocolate"}}>Chocolate</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("darkgray")}} style={{backgroundColor:"darkgray"}}>Darkgray</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("crimson")}} style={{backgroundColor:"crimson"}}>Crimson</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("brown")}} style={{backgroundColor:"brown"}}>Brown</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("khaki")}} style={{backgroundColor:"khaki"}}>khaki</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("lawngreen")}} style={{backgroundColor:"lawngreen"}}>lawngreen</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("lime")}} style={{backgroundColor:"lime"}}>Lime</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("springgreen")}} style={{backgroundColor:"springgreen"}}>SpringGreen</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("floralwhite")}} style={{backgroundColor:"floralwhite"}}>FloralWhite</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("tomato")}} style={{backgroundColor:"tomato"}}>Tomato</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("indigo")}} style={{backgroundColor:"indigo",color:"white"}}>
          Indigo</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("teal")}} style={{backgroundColor:"teal"}}>Teal</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("Tan")}} style={{backgroundColor:"Tan"}}>Tan</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("navy")}} style={{backgroundColor:"navy",color:"white"}}>Navy</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("wheat")}} style={{backgroundColor:"wheat"}}>wheat</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("aquamarine")}} style={{backgroundColor:"aquamarine"}}>AquaMarine</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("peru")}} style={{backgroundColor:"peru"}}>Peru</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("cadetblue")}} style={{backgroundColor:"cadetblue"}}>CadetBlue</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("forestgreen")}} style={{backgroundColor:"forestgreen"}}>ForestGreen</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("seagreen")}} style={{backgroundColor:"seagreen"}}>SeaGreen</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("thistle")}} style={{backgroundColor:"thistle"}}>ThiStle</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("salmon")}} style={{backgroundColor:"salmon"}}>Salmon</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("powderblue")}} style={{backgroundColor:"powderblue"}}>PowderBlue</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("paleturquoise")}} style={{backgroundColor:"paleturquoise"}}>PaleturQuoise</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("mediumorchid")}} style={{backgroundColor:"mediumorchid"}}>MediumorChid</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("lemonchiffon")}} style={{backgroundColor:"lemonchiffon"}}>LemonChiffon</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("indianred")}} style={{backgroundColor:"indianred"}}>IndianRed</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("dodgerblue")}} style={{backgroundColor:"dodgerblue"}}>DodgerBlue</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("bisque")}} style={{backgroundColor:"bisque"}}>Bisque</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("saddlebrown")}} style={{backgroundColor:"saddlebrown"}}>SaddleBrown</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("plum")}} style={{backgroundColor:"plum"}}>Plum</button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("oldlace")}} style={{backgroundColor:"oldlace"}}>OldLace</button>
         {/* <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("")}} style={{backgroundColor:""}}></button>
         <button className="px-7 py-5  rounded-lg text-xl" onClick={()=>{setColor("")}} style={{backgroundColor:""}}></button> */}
         </div>
         <div className=" justify-center flex mt-20">
              <button  onClick={()=>{setColor("black")}} style={{border:"7px solid black"}} className="text-center bg-white px-8 mt-12 py-6 rounded-full  text-lg font-extrabold text-green-500 ">Reset Button</button>
         </div>
      </div>
      </div>
  )
}

export default App
