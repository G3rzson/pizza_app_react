import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center mt-5">
      <div className="mt-5"></div>
      <h1>Az oldal nem található!</h1>
      <button type="button" onClick={() => navigate("/")} className="btn btn-lg btn-dark">
        Vissza a Főoldalra!
      </button>
    </div>
  )
}
