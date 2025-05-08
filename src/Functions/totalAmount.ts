import { DailyMenuType } from "../Types/types";

export function totalAmount(orders: DailyMenuType[]): number {
  let amount = 0;
  for (let i = 0; i < orders.length; ++i) {
    if (orders[i].size === 32) {
      amount += orders[i].price32;
    } else {
      amount += orders[i].price45;
    }
  }
  return amount;
}