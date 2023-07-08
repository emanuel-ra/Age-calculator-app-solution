import Input from "./Input"


function Form({ setDay, day, setMonth, month, setYear, year }) {
    const dayInput = {title:'Day',placeholder:'DD'}
    const monthInput = {title:'Month',placeholder:'MM'}
    const yearInput = {title:'Year',placeholder:'YYYY'}
  return (
    <form className="form">
        <Input attributes={dayInput} setValue={setDay} value={day} />
        <Input attributes={monthInput} setValue={setMonth} value={month} />
        <Input attributes={yearInput} setValue={setYear} value={year} />
    </form>
  )
}

export default Form