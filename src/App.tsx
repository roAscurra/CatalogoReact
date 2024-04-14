import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./components/Productos/Productos";
import DescripcionInstrumento from "./components/Instrumento/DescripcionInstrumento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/descripcion-instrumento/:id" element={<DescripcionInstrumento />} />
        <Route path="/" element={<Productos />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
