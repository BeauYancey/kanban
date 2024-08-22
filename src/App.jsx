import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Demo from './Demo'
import Login from './Login'
import CreateBoard from './components/CreateBoard'

function App() {

  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    fetch('/api/session', {
      method: 'PUT'
    })
    .then((res) => setAuthState(res.ok))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar authState={authState} setAuthState={setAuthState}/>
        <Routes>
          <Route path='/' exact element={<Demo />} />
          <Route path='/login' element={<Login setAuthState={setAuthState} />} />
          <Route path='/create' element={<CreateBoard />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
