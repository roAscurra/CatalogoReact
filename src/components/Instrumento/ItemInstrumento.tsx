type InstrumentoParam = {
    id: number,
    instrumento: string,
    // marca: string,
    // modelo: string,
    imagen: string,
    precio: number,
    costoEnvio: string,
    cantidadVendida: number
    // descripcion: string
	
}
function ItemInstrumento(args: InstrumentoParam) {
    const costoEnvioText = args.costoEnvio === "G" ? <><img src="../public/img/camion.png" alt="Camión" /> Envío gratis a todo el país</> : `Costo de Envío Interior de Argentina $${args.costoEnvio}`;
    const classEnvio = args.costoEnvio === "G" ? "text-green" : "text-orange";

    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-md-2">
                    <img src={`../public/img/${args.imagen}`} style={{width: '100%'}} className="img-fluid" alt={`imagen`}></img>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-title">{args.instrumento}</p>
                        <p className="card-text h1">$ {args.precio}</p>
                        <p className={`card-text ${classEnvio}`}>{costoEnvioText}</p>
                        <p className='card-text'>{args.cantidadVendida} vendidos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemInstrumento;
