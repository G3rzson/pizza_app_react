import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { DailyMenuType, PizzaContextType } from "../Types/types";
import { getPizzas } from "../Functions/getPizzas";

const PizzaContext = createContext<PizzaContextType | undefined>(undefined);

export function usePizzaContext() {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error("usePizzaContext must be used within a PizzaProvider");
  }
  return context;
}

export function PizzaProvider({ children }: { children: ReactNode }) {
  const [pizzas, setPizzas] = useState<DailyMenuType[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {
    getPizzas(setPizzas, setError, setLoading);
  }, []);
  
  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, loading, setLoading, error, setError}}>
      {children}
    </PizzaContext.Provider>
  );
}
