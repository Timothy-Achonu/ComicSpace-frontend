import { reducerCases } from "./Constants";


export const initialState = {
  books: [],
  categories: [],
  
};
const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_BOOKS: {
      return { ...state, books: action.books };
    }
    case reducerCases.SET_CATEGORIES: {
      return { ...state, categories: action.categories };
    }
    default:
      return state;
  }
};
export default reducer;
