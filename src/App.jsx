import Header from "./components/Header"
import Footer from "./components/Footer"
import Section from "./components/Section"

function App() {
  const name = "Eric";

  return (
    <div>
    <Header name={name}/>
    <Section />
    <Footer />
    </div>
  )
}

export default App