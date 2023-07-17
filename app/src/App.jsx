import Divider from "./components/Divider"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Results from "./components/Results"

function App() {

  return (

    <main className="flex justify-center">
      <section className="container">
        <Form />
        <Divider />
        <Results />
        <Footer />
      </section>      
    </main>
  )
} 

export default App
