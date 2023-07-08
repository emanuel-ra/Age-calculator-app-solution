import { useId } from "react"

export default function Input({attributes}) {
    const { title, placeholder } = attributes
    const inputId = useId();

    return (
        <div className="input-group">
            <label htmlFor={inputId} className="title">{title}</label>
            <input type="text" id={inputId} className="input" placeholder={placeholder} />
        </div>
    )
}
