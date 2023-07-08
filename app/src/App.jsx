import Divider from "./components/Divider"
import Form from "./components/Form"
import Results from "./components/Results"


function App() {

  return (
    <main className="flex justify-center">
      <section className="container">
        <Form />
        <Divider />
        <Results />
      </section>
    </main>
  )
} 

export default App
