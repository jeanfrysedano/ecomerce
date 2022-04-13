import Item from '../Item/Item'

const ItemDetail = ({products}) => {

    return(
        <div>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

export default ItemDetail