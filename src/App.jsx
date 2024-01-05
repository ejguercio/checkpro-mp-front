import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Detail from "./views/detail"
import Cart from "./views/Cart"
import Navbar from "./components/Navbar"


function App() {
  
  
  return (
    <main>
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/> 
        <Route path="/cart" element={<Cart/>}/>  
      </Routes>
    </BrowserRouter>
    </main>  
  )
}

export default App
