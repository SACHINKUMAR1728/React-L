import { useState} from "react";
function App() {
  const [color,setcolor] = useState("Olive");


  return (
    
    <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl" >
            <button onClick={()=>setcolor("red")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button  onClick={()=>setcolor("blue")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
            <button  onClick={()=>setcolor("green")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button  onClick={()=>setcolor("pink")} className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>            
            <button  onClick={()=>setcolor("violet")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}}>Voilet</button>
            <button  onClick={()=>setcolor("cyan")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"cyan"}}>Cyan</button>
            <button  onClick={()=>setcolor("lavender")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lavender"}}>Lavender</button>
            <button  onClick={()=>setcolor("maroon")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"maroon"}}>Maroon</button>
            <button  onClick={()=>setcolor("magenta")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"magenta"}}>Magenta</button>
            <button  onClick={()=>setcolor("silver")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"silver"}}>Silver</button>
            <button  onClick={()=>setcolor("yellow")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button  onClick={()=>setcolor("navy")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"navy"}}>Navy</button>
            <button  onClick={()=>setcolor("teal")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"teal"}}>Teal</button>
            <button  onClick={()=>setcolor("#89CFF0")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#89CFF0"}}>Baby Blue</button>
            <button  onClick={()=>setcolor("azure")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"azure"}}>Azure</button>
            <button  onClick={()=>setcolor("	#7393B3")}  className="outline-none px-3 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"#7393B3"}}>Blue Gray</button>
          </div>
        </div>
    </div>
      
  
  )
}

export default App
