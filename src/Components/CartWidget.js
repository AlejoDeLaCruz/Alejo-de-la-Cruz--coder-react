import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CustomProvider"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CartWidget = () => {

    const valorDelContexto = useContext(contexto)
    

    const [estado, setEstado] = useState(false)

    const abrirModal = () => {
    setEstado(true)
    }
    const cerrarModal = () => {
    setEstado(false)
    }

    return (
        <>
            <div id="carrito-navBar">
            <Link to={"/cart"} className="material-icons" id="icono-carrito">shopping_cart_checkout</Link>
            <button className="material-icons" id="boton-carrito"onClick={abrirModal}>expand_more</button>
            </div>

      <Modal isOpen={estado}>
        <ModalHeader>
          Carrito
        </ModalHeader>
        <ModalBody>
        <span className="items_cantidad">Tienes {valorDelContexto.cantidadTotal} productos en el carrito</span>
        </ModalBody>
        <ModalFooter>
            <Link className="btn btn-primary" to="/cart" onClick={cerrarModal}>Comprar</Link>
            <Button color="secondary" onClick={cerrarModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
        </>
           
    )
}

export default CartWidget
