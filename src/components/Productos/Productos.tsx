import React from "react";
import { Link } from "react-router-dom";
import Instrumeno from "../../entities/Instrumento";
import { getInstrumentosJSON } from "../../servicios/FuncionesApi";
import ItemInstrumento from "../Instrumento/ItemInstrumento";

function Productos() {
  const instrumentos: Instrumeno[] = getInstrumentosJSON();

  return (
    <div className="row">
      {instrumentos.map((instrumento: Instrumeno) => (
        <Link key={instrumento.id} to={`/descripcion-instrumento/${instrumento.id}`} style={{ textDecoration: 'none' }}>
          <ItemInstrumento key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} imagen={instrumento.imagen} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida}/>
        </Link>
      ))}
    </div>
  
  );
}

export default Productos;
