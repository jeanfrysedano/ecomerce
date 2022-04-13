import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsById().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    



    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer