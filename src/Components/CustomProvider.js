import { createContext, useState, useContext } from "react"
export const contexto = createContext()
const { Provider } = contexto



export const useCarrito = () => {
    return useContext(contexto)
}


const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [producto, setProducto] = useState("")
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
        setProducto("")
    }

    const borrarItem = (item, cantidad) => {
        
        if(cantidadTotal > 0){
            setCantidadTotal(item.cantidad - 1)
            setTotal(total - item.precio * cantidad)
        }
        
    }

    const sumarItem = (item, cantidad) =>{
        setCantidadTotal(item.cantidad + 1)
        setTotal(total + item.precio * cantidad)
    }

    const agregarProducto = (item, cantidad) => {
        if (isInCart.inCart) {
            
        } else {
            console.log("producto nuevo en el carrito!")
            setCarrito([
                ...carrito,
                { ...item, cantidad }
            ])
            setTotal(total + item.precio * cantidad)
            setProducto(item.nombre)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    
    }

    const isInCart = (id) => {
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        cantidadTotal : cantidadTotal,
        item: producto,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarItem: borrarItem,
        sumarItem: sumarItem
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider


// import { createContext, useState, useContext } from "react"


// export const contexto = createContext()
// const {Provider} = contexto 

// const CustomProvider = ({children}) =>{
//     const [carrito, setCarrito] = useState([
//         {nombre:"remera", precio:2333 ,cantidad: 2},
//        {nombre:"remerasa", precio:23323 ,cantidad: 2}
//    ])

//    const [total, setTotal] = useState(5)

//    const vaciarCarrito = () =>{
//         setCarrito([])
//         setTotal(0)
//    }

//    const valorContexto = {
//       productos: carrito,
//       cantidad: total,
//       vaciarCarrito: vaciarCarrito
//    }
// }

// return (
//     <Provider value={valorContexto}>
//         {children}
//     </Provider>
// )
    
// export default CustomProvider