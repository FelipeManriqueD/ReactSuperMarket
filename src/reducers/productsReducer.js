const initialState = {
  groups: [],
  categories: [],
  productsByCategory: [],
  productsToBasket: [],
  productsWithChangeAmount: 1,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GROUPS":
      return { ...state, groups: action.payload };
    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        productsByCategory: [
          ...state.productsByCategory,
          { productCategory: action.payload },
        ],
      };
    case "ADD_PRODUCT_TO_BASKET":
      return {
        ...state,
        productsToBasket: [...state.productsToBasket, action.payload],
      };
    case "ADD_CHANGE_PRODUCT_AMOUNT_TO_BASKET":
      return {
        ...state,
        productsWithChangeAmount: action.payload,
      };
    case "SET_UINQUE_PRODUCT_BASKET":
      return state;
    default:
      return state;
  }
};
