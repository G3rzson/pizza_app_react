import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/logo.png";
import { usePizzaContext } from "../Context/PizzaContext";
import { titleFormatter } from "../Functions/titleFormatter";
import { priceFormatter } from "../Functions/priceFormatter";
import { DailyMenuType } from "../Types/types";
import { totalAmount } from "../Functions/totalAmount";

export default function Header() {
  const { orders, setOrders } = usePizzaContext();

  const handleRemoveFromCart = (order: DailyMenuType) => {
    setOrders(orders.filter((product) => product !== order));
  };

  const navigate = useNavigate();
  function handleCloseModal() {
    const hasModalOpenClass = document.body.classList.contains("modal-open");

    if (hasModalOpenClass) {
      navigate("/pizzas");
    }
  }

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
            <button
              className="nav-link position-relative"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              <i className="bi bi-cart"></i>
              {orders && orders.length > 0 && (
                <p
                  style={{
                    top: "15%",
                    left: "55%",
                    width: "1.5rem",
                    height: "1.5rem",
                    fontSize: "0.9rem",
                  }}
                  className="bg-success d-flex align-items-center justify-content-center position-absolute rounded-circle p-2 m-0"
                >
                  {orders.length}
                </p>
              )}
            </button>
          </div>
        </nav>
      </div>
      <div className="modal modal-xl fade" id="modal">
        <div className="modal-dialog modal-fullscreen-lg-down modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1>
                Kosaram<i className="bi bi-cart ms-3"></i>
              </h1>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                data-bs-target="#modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {orders && orders.length > 0 ? (
                orders.map((order, index) => (
                  <div className="card mb-3 overflow-hidden" key={index}>
                    <div className="row g-0">
                      <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img
                          src={order.pichUrl}
                          className="img-fluid"
                          style={{ height: "100%", width: "auto" }}
                          alt={order.title}
                        />
                      </div>
                      <div className="col-md-8 d-flex justify-content-between flex-column">
                        <div className="card-body">
                          <h3 className="card-title">
                            {titleFormatter(order.title)}
                          </h3>
                          <p className="card-text">{order.ingredients}</p>
                          <div className="d-flex justify-content-between align-items-center gap-5">
                            <p className="card-text m-0">
                              Méret: {order.size} cm
                            </p>
                            <p className="card-text m-0">
                              Ár:
                              <span className="text-success ms-2">
                                {priceFormatter(
                                  order.size === 32
                                    ? order.price32
                                    : order.price45
                                )}{" "}
                                Ft
                              </span>
                            </p>
                            <div className="card-text m-0 d-flex justify-content-center align-items-center gap-2">
                              <button className="btn btn-danger">-</button>
                              <p className="m-0">{order.quantity} db</p>
                              <button className="btn btn-success">+</button>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer d-flex justify-content-center justify-content-sm-end">
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemoveFromCart(order)}
                          >
                            Pizza eltávolítása a kosárból
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h2 className="text-center">A kosarad jelenleg üres!</h2>
              )}
            </div>
            <div className="modal-footer d-flex justify-content-between align-items-center">
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-bs-target="#modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                Tovább a Pizzákhoz
              </button>
              {orders && orders.length > 0 && (
                <div className="d-flex justify-content-between align-items-center gap-5">
                  <h4>
                    Végösszeg:{" "}
                    <span className="text-success">
                      {priceFormatter(totalAmount(orders))} Ft
                    </span>
                  </h4>
                  <button
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                    data-bs-target="#modal"
                    aria-label="Close"
                  >
                    Megrendelem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
