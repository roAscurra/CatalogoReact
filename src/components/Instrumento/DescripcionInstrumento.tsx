import React from "react";
import { useParams, Link } from "react-router-dom";
import Instrumeno from "../../entities/Instrumento";
import { getInstrumentosJSON } from "../../servicios/FuncionesApi";

function DescripcionInstrumento() {
  const { id } = useParams<{ id: string }>();
  const instrumentos: Instrumeno[] = getInstrumentosJSON();
  const instrumento: Instrumeno | undefined = instrumentos.find(item => item.id === parseInt(id || ''));

  if (!instrumento) {
    return <div>No se encontró el instrumento</div>;
  }
  const costoEnvioText = instrumento.costoEnvio === "G" ? <><img src="../public/img/camion.png" alt="Camión" /> Envío gratis a todo el país</> : `Costo de Envío Interior de Argentina $${instrumento.costoEnvio}`;
  const classEnvio = instrumento.costoEnvio === "G" ? "text-green" : "text-orange";

  return (
    <div>
      <div className="col-md-12 text-start btn btn-white">
        <Link to="/" style={{ color: 'grey', textDecoration: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
          <span>Volver</span>
        </Link>
      </div>

      
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-6">
            <img src={`../public/img/${instrumento.imagen}`} style={{ width: '100%' }} className="img-fluid" alt={`imagen`}></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <label className='card-text text-black-50 bg-white'>Nuevo | +{instrumento.cantidadVendida - 1} vendidos</label>
              <p className="card-title">{instrumento.instrumento}</p>
              <p className="card-text h1">$ {instrumento.precio}</p>
              <p className={`card-text ${classEnvio}`}>{costoEnvioText}</p>
              <p className="card-text"><b>Descripción:</b> {instrumento.descripcion}</p>
              <p className="card-text"><b>Modelo:</b> {instrumento.modelo}</p>
              <p className="card-text"><b>Marca:</b> {instrumento.marca}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default DescripcionInstrumento;
