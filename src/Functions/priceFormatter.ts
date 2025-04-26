// Formázza az ár kinézetét
export function priceFormatter(number: number): string {
  //console.log(number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Ez szétválasztja 3-as csoportokba
}
