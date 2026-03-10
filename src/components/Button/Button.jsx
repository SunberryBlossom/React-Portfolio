import './Button.module.css';

export default function Button ({ text }) {
    return (
        <button className='Button'>
            {text}
        </button>
    )
}