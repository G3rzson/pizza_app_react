import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter as Router } from "react-router-dom";
import { PizzaProvider } from "./Context/PizzaContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/pizza_app_react">
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </Router>
  </StrictMode>
);
