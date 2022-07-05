import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  cart: [],
  isLoggedIn: false,
  user: {
    id: "",
    username: "",
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    role: "",
  },
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  shipping: {
    address1: "",
    address2: "",
    city: "",
    region: "",
  },
  costs: {
    subtotal: 0,
    total: 0,
    totalWithShipping: 0,
    shipping: 0,
    tax: 0,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.cart.find(item => item.id === action.payload.id)) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "CHANGE_PRODUCT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      case "DELETE_CART":
      return {
        ...state,
        cart: [],
      }
    case "SIGN_UP":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: {
          id: "",
          name: "",
          email: "",
          password: "",
          address: "",
          phone: "",
          role: "",
        },
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case "SET_SHIPPING":
      return {
        ...state,
        shipping: action.payload,
      };
    case "SET_CONTACT":
      return {
        ...state,
        contact: action.payload,
      };
    case "SET_COSTS":
      return {
        ...state,
        costs: action.payload,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store, false);

export { store, persistor };
