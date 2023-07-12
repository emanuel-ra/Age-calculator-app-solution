import { useId } from "react";
import PropTypes from 'prop-types';

export default function Input({attributes, handler, maxLength,error, errorMessage}) {
    const { title, placeholder } = attributes
    const inputId = useId();
        
    const handleChange = (event) => {
        if(event.target.value.length === maxLength)
            handler(event.target.value)
    }
    

    return (
        <div className="input-group">
            <label htmlFor={inputId} className={`title ${error && 'title-error'}`}>{title}</label>
            <input type="text" id={inputId} className={`input ${error && 'input-error'}`} placeholder={placeholder} onKeyUp={handleChange} maxLength={maxLength} />
            {error && <small className="error-message">{errorMessage}</small>}            
        </div>
    )
}

Input.propTypes = {
    attributes: PropTypes.object ,
    handler: PropTypes.func ,
    maxLength: PropTypes.number ,
    error: PropTypes.bool ,
    errorMessage: PropTypes.string
}