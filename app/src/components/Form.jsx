import Input from "./Input"


function Form() {
    const dayInput = {title:'Day',placeholder:'DD'}
    const monthInput = {title:'Month',placeholder:'MM'}
    const yearInput = {title:'Year',placeholder:'YYYY'}
  return (
    <form className="form">
        <Input attributes={dayInput} />
        <Input attributes={monthInput} />
        <Input attributes={yearInput} />
    </form>
  )
}

export default Form