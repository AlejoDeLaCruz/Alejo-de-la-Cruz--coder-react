import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getProduct} from "./Data/productos";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"


const ItemDetailContainer = () => {
    const [item, setProduct] = useState({});
    const { id } = useParams();

    console.log(id);
    console.log(item);
    
    useEffect(()=>{
        const productosCollection = collection(db, "Productos")

        const refe = doc(productosCollection,id) 
        
        const consulta = getDoc(refe)

        consulta
        .then(res=>{
            setProduct(res.data())
        })
        .catch(error=>{
            console.log(error)
        })
    },[])


    return (
        <>
            <div>
                <ItemDetail item={item} />
            </div>
        </>
    );
    
};

export default ItemDetailContainer;