export type DailyMenuType = {
  title: string,
  pichUrl: string,
  ingredients: string,
  price32: number,
  price45: number,
  size?: number
  quantity?: number
}

export type LoaderProp = {
  size: number
}

export type PizzaContextType = {
  pizzas: DailyMenuType[],
  setPizzas: React.Dispatch<React.SetStateAction<DailyMenuType[]>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  error: string | null,
  setError: React.Dispatch<React.SetStateAction<string | null>>
  orders: DailyMenuType[], 
  setOrders: React.Dispatch<React.SetStateAction<DailyMenuType[]>>,
};