import './App.css';
import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './home.js'
import MainPage from './mainpage.js'
import Employment from './employment.js'
import MakeUp from './makeup.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route exact path="/" element={<MainPage />}/>
            <Route path="/employment" element={<Employment />}/>
            <Route path="/employment/makeup" element={<MakeUp />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App