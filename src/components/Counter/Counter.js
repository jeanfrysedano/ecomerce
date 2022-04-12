import { useState, useEffect } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Se acaba de montar el componente')
        let isActive = true

        setTimeout(() => {
            if(isActive) {
                setCount(stock)       
            }
        }, 3000)

        return (() => {
            isActive = false
            console.log('Esto se ejecuta antes de desmontar el componente')
        })
    })

    useEffect(() => {
        console.log('cambio el count')
    }, [count])


    const decrement = () => {if (count>initial){setCount(count - 1)}}

    const increment = () => {if (count<stock){setCount(count + 1)}}

    console.log('Esto esta en el cuerpo del componente')
    return(
        <div className='botones'>
            <div className='botonCount'>
            <button  onClick={decrement}>-</button> 
            <p >{count}</p>
            <button onClick={increment}>+</button>
            </div>
            <button className='carrito' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter