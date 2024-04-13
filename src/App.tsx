import { BrowserRouter, Route, Routes } from "react-router-dom"
import Productos from "./components/Productos/Productos"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productos />}/>
        <Route path="/productos" element={<Productos />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
