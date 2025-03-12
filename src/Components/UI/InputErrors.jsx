import e from './styles/InputErrors.module.css'

const InputErrors = ({errorMessage}) => {
    return (
        <div className={e.error_message}>{errorMessage}</div>
    )
}

export default InputErrors;