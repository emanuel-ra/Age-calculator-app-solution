import { useApp } from "../hooks/useApp"
import Input from "./Input"


function Form() {

 
  const dayInput = {title:'Day',placeholder:'DD'}
  const monthInput = {title:'Month',placeholder:'MM'}
  const yearInput = {title:'Year',placeholder:'YYYY'}
  const fullDateError = false;
  return (
    <>
    <form className="form">
        <Input attributes={dayInput} maxLength={2}  />
        <Input attributes={monthInput}  maxLength={2} />
        <Input attributes={yearInput}  maxLength={4} />        
    </form>   
    {fullDateError &&  <div className="w-full px-10"><span className="error-message">Must be a valid date</span></div>}    
    </>
  )
}

export default Form