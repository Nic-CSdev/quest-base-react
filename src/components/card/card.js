import './card.css'

const Card = (props) => {
    return (
        <div className="card">
            <p style={{ color: props.color }}>{props.content.toUpperCase()}</p>
        </div>
    )   
}

Card.defaultProps = {
    color: '#fff'
}

export default Card