import { useApp } from "../hooks/useApp"
import Input from "./Input"


function Form() {

  const { dayError, handleDay , day , monthError, handleMonth , month ,  yearError, handleYear, year} = useApp()    
  const dayInput = {title:'Day',placeholder:'DD'}
  const monthInput = {title:'Month',placeholder:'MM'}
  const yearInput = {title:'Year',placeholder:'YYYY'}
  
  return (
    <form className="form">
        <Input attributes={dayInput} handleFunction={handleDay} currenValue={day} maxLength={2} error={dayError} />
        <Input attributes={monthInput} handleFunction={handleMonth} currenValue={month} maxLength={2} error={monthError} />
        <Input attributes={yearInput} handleFunction={handleYear} currenValue={year} maxLength={4} error={yearError} />
    </form>
  )
}

export default Form