import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Pizzas from "./Pages/Pizzas"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import Basket from "./Pages/Basket"

function App() {

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
