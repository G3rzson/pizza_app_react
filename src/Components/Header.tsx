import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

export default function Header() {
  return (
    // navbar-expand-sm => breakpoint => sm ≥576px
    <header className="navbar navbar-expand-sm bg-dark" data-bs-theme="dark">
      <div className="container">
        {/* Bal oldali Logó */}
        <Link className="navbar-brand" to="/">
          <img
            className="rounded-1"
            style={{ height: "64px", width: "auto" }}
            src={logo}
            alt="Logó"
          />
        </Link>

        {/* Hamburger gomb */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menü linkek */}
        <nav
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-2 gap-2">
            <Link className="nav-link" to="/pizzas">
              Pizzák
            </Link>
            <Link className="nav-link" to="/contact">
              Kapcsolatok
            </Link>
            <Link className="nav-link" to="/basket">
              <i className="bi bi-cart"></i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
