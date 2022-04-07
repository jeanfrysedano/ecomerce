const Item = ({ name, img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <button>Ver Detalle</button>
        </section>
    )
}

export default Item 