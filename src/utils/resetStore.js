import { store } from "@redux/store";

const resetStore = () => {
  store.dispatch({ type: "DELETE_CART" });
  store.dispatch({ type: "RESET_COSTS" });
  store.dispatch({ type: "RESET_SHIPPING" });
  store.dispatch({ type: "RESET_CONTACT" });

  return;
};

export default resetStore;
