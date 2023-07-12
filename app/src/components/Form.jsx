import { useApp } from "../hooks/useApp"
import Input from "./Input"


function Form() {

  const {handleDay, errorDay, handleMonth, errorMonth, handleYear, errorYear, errorDate } = useApp()
 
  const dayInput = {title:'Day',placeholder:'DD'}
  const monthInput = {title:'Month',placeholder:'MM'}
  const yearInput = {title:'Year',placeholder:'YYYY'}
  console.log(errorDate)
  return (
    <>
    <form className="form">
        <Input attributes={dayInput} maxLength={2} handler={handleDay} error={errorDay} errorMessage='Must be a valid day'  />
        <Input attributes={monthInput}  maxLength={2} handler={handleMonth} error={errorMonth} errorMessage='Must be a valid month' />
        <Input attributes={yearInput}  maxLength={4} handler={handleYear} error={errorYear} errorMessage='Must be a valid year' />        
    </form>   
    {errorDate &&  <div className="w-full px-10"><span className="error-message">Must be a valid date</span></div>}    
    </>
  )
}

export default Form