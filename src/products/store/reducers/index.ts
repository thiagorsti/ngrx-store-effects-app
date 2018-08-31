import * as fromPizzas from "./pizzas.reducer";
import { ActionReducerMap } from "../../../../node_modules/@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};
