import { useState } from "react";
import { usePizzaContext } from "../Context/PizzaContext";
import { priceFormatter } from "../Functions/priceFormatter";
import { titleFormatter } from "../Functions/titleFormatter";

export default function Pizzas() {
  const { pizzas } = usePizzaContext();

  // Minden pizzához külön tároljuk a választott méretet
  const [meretek, setMeretek] = useState<{ [key: number]: number }>({});

  const handleSizeChange = (index: number, size: number) => {
    setMeretek((prev) => ({
      ...prev,
      [index]: size,
    }));
  };

  return (
    <>
      <h1 className="text-center my-3">Pizzáink:</h1>
      <div className="container d-flex align-items-center flex-wrap justify-content-center gap-2 my-4">
        {pizzas.map((pizza, index) => {
          const selectedMeret = meretek[index] || 32; // alapból 32 cm

          return (
            <div
              key={index}
              className="card mb-3 bg-dark text-light"
              style={{ width: "18rem" }}
            >
              <img
                src={pizza.pichUrl}
                className="card-img-top"
                alt={pizza.title}
              />
              <div className="card-body">
                <h3 className="card-title my-3">{titleFormatter(pizza.title)}</h3>
                <p className="card-text" style={{ height: "6rem" }}>
                  Összetevők: {pizza.ingredients}
                </p>

                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor={`select-${index}`}>
                    Méret:
                  </label>
                  <select
                    className="form-select"
                    id={`select-${index}`}
                    value={selectedMeret}
                    onChange={(e) => handleSizeChange(index, Number(e.target.value))}
                  >
                    <option value="32">32 cm</option>
                    <option value="45">45 cm</option>
                  </select>
                </div>

                <p className="card-text mb-3">
                  Ár:
                  <span className="text-success ms-2">
                    {selectedMeret === 32
                      ? priceFormatter(pizza.price32)
                      : priceFormatter(pizza.price45)}{" "}
                    Ft
                  </span>
                </p>

                <button
                  type="button"
                  className="btn btn-success"
                  style={{ width: "100%" }}
                >
                  Hozzáadás a Kosárhoz!
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
