import { useEffect, useState } from "react";
import Instrumeno from "../../entities/Instrumento";
import { getInstrumentosJSON } from "../../servicios/FuncionesApi";
import ItemInstrumento from "../Instrumento/ItemInstrumento";

function Productos() {

    const [instrumentos, setInstrumentos] = useState<Instrumeno[]>([]);
    const getInstrumentosLista = () => {
        const data: Instrumeno[] = getInstrumentosJSON();
        setInstrumentos(data)
    }
    useEffect(()=>{
        getInstrumentosLista();
    })

    return(
        <>
        <div className="row">
            {instrumentos.map((instrumento:Instrumeno) =>
                <ItemInstrumento key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} imagen={instrumento.imagen} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida}/>
            )}
        </div>
        </>
    )
}
export default Productos;