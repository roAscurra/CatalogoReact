function Card({ instrumento= "", imagen = "", precio = 0,costoEnvio= "G", cantidadVendida= 0}){
    const costoEnvioText = costoEnvio === "G" ? "Envío gratis a todo el país" : `Costo de Envío Interior de Argentina $${costoEnvio}`;
    const classEnvio = costoEnvio === "G" ? "text-success" : "text-orange";

    <div className="card mb-3">
        <div className="row">
            <div className="col-md-2">
                <img src={`../public/img/${imagen}`} style={{width: '100%'}} className="img-fluid" alt={`imagen`}></img>
            </div>
            <div className="col-md-10">
                <div className="card-body">
                    <h2 className="card-title">{instrumento}</h2>
                    <p className="card-text">${precio}</p>
                    <p className={`card-text ${classEnvio}`}><small>{costoEnvioText}</small></p>
                    <p className='card-text'>{cantidadVendida} vendidos</p>
                </div>
            </div>
        </div>
    </div>
}

export default Card;