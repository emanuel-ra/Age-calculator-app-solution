import { useState } from "react"
import Divider from "./components/Divider"
import Form from "./components/Form"
import Results from "./components/Results"


function App() {

  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()

  return (
    <main className="flex justify-center">
      <section className="container">
        <Form setDay={setDay} day={day} setMonth={setMonth} month={month} year={year} setYear={setYear} />
        <Divider />
        <Results />
      </section>
    </main>
  )
} 

export default App
