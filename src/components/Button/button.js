const Button = (props) => {
    return (
        <button className={props.type} onClick={props.func}>{props.label}</button>
    )
}

export default Button