import { addDoc, collection, serverTimestamp  } from "firebase/firestore"
import { useContext, useRef, useState } from "react"
import { useCarrito } from "./CustomProvider"
import { contexto } from "./CustomProvider"
import { db } from "./firebase"



const Carrito = () => {

    const valorDelContexto = useContext(contexto)
    const { borrarItem, vaciarCarrito, sumarItem, productos } = useCarrito()

    const refName = useRef() 
    const refAge = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            
        }
            
            const ordersCollection = collection(db, "orden")
            const consulta = addDoc(ordersCollection, orden)
            consulta
            .then((docRef) => {
                console.log(docRef.id)
            })
            .then((error)=>{
                console.log(error)
            })


    }

        
console.log(valorDelContexto)

    return (
        <div>
            {productos.map((item)=>{
                return(
                    <>
                        <div key={item.id} className="producto_a_comprar">
                        <img id="imagen_compacta"src={item.img} alt={item.nombre}/>
                        <h5 className="info_carrito">Producto: {item.nombre}</h5>
                        <h5 className="info_carrito">Precio: ${item.precio}</h5>
                        <h5 className="info_carrito">X{item.cantidad}</h5>
                        <button className="btn btn-danger"onClick={borrarItem}>-</button>
                        <button className="btn btn-primary"onClick={sumarItem}>+</button>
                    </div>
                    </>
                )
            })}
            <div id="botones_carrito">
                {/* {id ? <h1>Orden generada con exito, su id es {id}</h1> : null} */}
                <button className="btn btn-secondary"  onClick={vaciarCarrito}>vaciar el carrito</button>
            </div>
            
            
            <form className="form" onSubmit={handleSubmit}>

                <div>
                    <input ref={refName} type="text" />
                </div>
                    
                <div>
                    <input ref={refAge} type="text" />
                </div>

                <button className="btn btn-secondary" id="boton_guardar">guardar</button>
            </form>
        </div>
    )
}

export default Carrito