import './Button.css';

function Button({type, label, onClick}) {
    return (
        <button type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;