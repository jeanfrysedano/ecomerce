import './NavBar.css'
import CartWitget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <img className="logoo" src="../imagenes/loogo.png"></img>
            <ul className="Botones">
                <li><a href="">Home</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
            <CartWitget ></CartWitget>
            
        </nav>
    )
} 


export default NavBar