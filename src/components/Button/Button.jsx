import './Button.module.css';

export default function Button ({ text ="default text" }) {
    return (
        <button>
            {text}
        </button>
    )
}