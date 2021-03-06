import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App
