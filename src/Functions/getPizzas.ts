import { DailyMenuType } from "../Types/types";

export async function getPizzas(
  setPizzas:  React.Dispatch<React.SetStateAction<[] | DailyMenuType[]>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}Data/pizzas.json`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Ha az adat tömb üres vagy nem megfelelő, akkor hiba kezelése
    if (data.length === 0) {
      setError("Nincs elérhető napi ajánlat.");
    } else {
      setPizzas(data);
    }
  } catch (error) {
    setError("Hiba történt az adatok betöltése közben.");
    console.error("Failed to fetch data:", error);
  } finally {
    setLoading(false);
  }
}
