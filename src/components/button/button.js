import './button.css'

const Button = ({label}) => {

    const showLabel = (label) => {
        alert(`A label desse botão é ${label}`)
    }

    return (
        <button className="btn" onClick={() => showLabel(label)}>{label}</button>
    )
}

export default Button