
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login.jsx'
import Profile from './component/Profile'

function App() {
  
  return (
    <UserContextProvider>

      <h1>THis is react</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
