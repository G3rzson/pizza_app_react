import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Pizzas from "./Pages/Pizzas"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <>
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="m-0 p-0"><h4 className="py-4 m-0 bg-dark text-light text-center">&copy; 2025 PappaPizza</h4></footer>
    </>
  )
}

export default App
