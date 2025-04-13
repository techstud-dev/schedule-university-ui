import b from './styles/Button.module.css'

export const Button = (props) => {
    return (
        <div className={b.container}>
            <button>{props.textBtn}</button>
        </div>
    )
}