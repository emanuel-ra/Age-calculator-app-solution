import { useId } from "react"

export default function Input({attributes, setValue, value}) {
    const { title, placeholder } = attributes
    const inputId = useId();
    const regExp = /^\d+$/
    const handleChange = (e) => {
        if(regExp.test(e.target.value)){
            setValue(e.target.value)
        }else{
            setValue('')
        }       
        
    }
    return (
        <div className="input-group">
            <label htmlFor={inputId} className="title title-error">{title}</label>
            <input type="text" id={inputId} className="input input-error" value={value} placeholder={placeholder} onChange={handleChange} />
            <small className="error-message">Must be a valid day</small>
        </div>
    )
}
