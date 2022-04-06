import { Component } from "react";

class ClassNavBar extends Component {

    render() {
        return (
            <nav className="NavBar">
                <h2>{this.props.name}</h2>
                <button>boton1</button>
            </nav>
        )
    }
}

export default ClassNavBar