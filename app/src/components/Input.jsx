import { useId } from "react";
import PropTypes from 'prop-types'

export default function Input({attributes, handleFunction, maxLength,error, cleanResults}) {
    const { title, placeholder } = attributes
    const inputId = useId();

    const handleChange = (event) => {
        if(event.target.value.length === maxLength)
            handleFunction(event.target.value)
        if(event.target.value==='')
            cleanResults()
    }
    return (
        <div className="input-group">
            <label htmlFor={inputId} className={`title ${error && 'title-error'}`}>{title}</label>
            <input type="text" id={inputId} className={`input ${error && 'input-error'}`} placeholder={placeholder} onChange={handleChange} maxLength={maxLength} />
            {error && <small className="error-message">Must be a valid day</small>}            
        </div>
    )
}

Input.propTypes = {
    attributes: PropTypes.object ,
    handleFunction: PropTypes.func ,
    maxLength: PropTypes.number ,
    error: PropTypes.bool ,
    cleanResults: PropTypes.func
}