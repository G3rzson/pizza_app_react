import { useState } from "react";
import "../style.css";

export default function Questions() {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  return (
    <div className="container my-4 d-flex gap-2 flex-column">
      {/* Első kérdés */}
      <div className="row bg-dark text-light rounded p-2">
        <div className="col">
          <p className="m-0">Kiszállítási költségek?</p>
          <p id="first" className="collapse m-0 text-warning">
            Városon belül 500 Ft a kiszállítási költség.
          </p>
        </div>
        <div className="col col-2 text-end">
          <button
            data-bs-toggle="collapse"
            data-bs-target="#first"
            aria-expanded="false"
            aria-controls="first"
            className={`btn btn-secondary rounded-circle bg-transparent transition-rotate ${
              openFirst ? "rotate-180" : ""
            }`}
            onClick={() => setOpenFirst(!openFirst)}
          >
            <i className="bi bi-caret-down"></i>
          </button>
        </div>
      </div>

      {/* Második kérdés */}
      <div className="row bg-dark text-light rounded p-2">
        <div className="col">
          <p className="m-0">Kiszállítási idő?</p>
          <p id="second" className="collapse m-0 text-warning">
            Kb. 40 és 90 perc között, forgalomtól függően.
          </p>
        </div>
        <div className="col col-2 text-end">
          <button
            data-bs-toggle="collapse"
            data-bs-target="#second"
            aria-expanded="false"
            aria-controls="second"
            className={`btn btn-secondary rounded-circle bg-transparent transition-rotate ${
              openSecond ? "rotate-180" : ""
            }`}
            onClick={() => setOpenSecond(!openSecond)}
          >
            <i className="bi bi-caret-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
