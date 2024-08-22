import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Demo from './Demo'
import Login from './Login'

function App() {

  const [authState, setAuthState] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Navbar authState={authState} setAuthState={setAuthState}/>
        <Routes>
          <Route path='/' exact element={<Demo />} />
          <Route path='/login' element={<Login setAuthState={setAuthState} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
