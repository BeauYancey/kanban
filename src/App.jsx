import Demo from './Demo'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Demo />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
