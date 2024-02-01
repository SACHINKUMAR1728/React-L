import Chai from './chai.jsx';

function Myapp(){
    return(
        <h3>Sachin is having Chai at office!!!</h3>
    )
}

function App() {
  var username = "sachin1728";

  return (
    <>
   <Chai/>
   <h1>React App</h1>
   <p>this is great. {username}</p>
    <Myapp/>
   </>
  )
}
export default App
