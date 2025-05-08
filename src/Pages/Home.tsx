import { useEffect, useState } from "react";
import { titleFormatter } from "../Functions/titleFormatter";
import { priceFormatter } from "../Functions/priceFormatter";
import { DailyMenuType } from "../Types/types";
import Loader from "../Components/Loader";
import { getPizzas } from "../Functions/getPizzas";
import { usePizzaContext } from "../Context/PizzaContext";

export default function Home() {
  const [meret, setMeret] = useState<number>(32);
  const [dailyMenu, setDailyMenu] = useState<DailyMenuType | null>(null);

  const {
    pizzas,
    setPizzas,
    loading,
    setLoading,
    error,
    setError,
    orders,
    setOrders,
  } = usePizzaContext();

  useEffect(() => {
    getPizzas(setPizzas, setError, setLoading);
  }, []);

  useEffect(() => {
    setDailyMenu(pizzas[Math.floor(Math.random() * pizzas.length)]);
  }, [pizzas]);

  const handleAddToCart = (pizza: DailyMenuType, selectedMeret: number) => {
    const pizzaToAdd = {
      title: pizza.title,
      pichUrl: pizza.pichUrl,
      ingredients: pizza.ingredients,
      price32: pizza.price32,
      price45: pizza.price45,
      size: selectedMeret,
    };

    // Ellenőrizzük, hogy benne van-e már a kosárban
    const isPizzaInCart = orders.some(
      (order) =>
        order.title === pizzaToAdd.title && order.size === pizzaToAdd.size
    );

    if (isPizzaInCart) {
      // Ha már benne van, eltávolítjuk
      setOrders(
        orders.filter(
          (order) =>
            order.title !== pizzaToAdd.title || order.size !== pizzaToAdd.size
        )
      );
    } else {
      // Ha nincs benne, hozzáadjuk
      setOrders((prevState) => [...prevState, pizzaToAdd]);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Napi ajánlatunk:</h1>

      {loading ? (
        <div className="d-flex align-items-center justify-content-center my-5">
          <Loader size={128} />
        </div>
      ) : error ? (
        <p className="text-warning text-center fs-3">{error}</p>
      ) : (
        <div className="card mb-3 bg-dark text-light">
          <div className="card-body">
            {dailyMenu && (
              <>
                <img
                  src={dailyMenu.pichUrl}
                  style={{ height: "200px", objectFit: "cover" }}
                  className="card-img-top"
                  alt={dailyMenu.title}
                />
                <h3 className="card-title my-3">
                  {titleFormatter(dailyMenu.title)}
                </h3>
                <p className="card-text">Összetevők: {dailyMenu.ingredients}</p>

                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="inputGroupSelect01"
                  >
                    Méret:
                  </label>
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    value={meret}
                    onChange={(e) => setMeret(Number(e.target.value))}
                  >
                    <option value="32">32 cm</option>
                    <option value="45">45 cm</option>
                  </select>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <p className="card-text m-0">
                    Ár:
                    <span className="text-success ms-2">
                      {meret === 32
                        ? priceFormatter(dailyMenu.price32)
                        : priceFormatter(dailyMenu.price45)}{" "}
                      Ft
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(dailyMenu, meret)}
                    className={`btn ${
                      orders.some(
                        (order) =>
                          order.title === dailyMenu.title &&
                          order.size === meret
                      )
                        ? "btn-danger"
                        : "btn-success"
                    }`}
                  >
                    {orders.some(
                      (order) =>
                        order.title === dailyMenu.title && order.size === meret
                    )
                      ? "Eltávolítás a Kosárból!"
                      : "Hozzáadás a Kosárhoz!"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
