import JsonServerApi from "../API/JsonServerApi";
import { validateForm } from "../utils/tools";

export const checkUser = (user) => async (dispatch) => {
  const { email, password } = user;
  //const isValidForm = validateForm(user);
  const response = await JsonServerApi.post("/login", {
    email,
    password,
  });

  dispatch({ type: "CHECK_USER_LOGIN", payload: response });
};

export const registerUser = (user) => async (dispatch) => {
  const { name, phone, email, password } = user;
  const response = await JsonServerApi.post("/user", {
    name,
    phone,
    email,
    password,
  });

  dispatch({ type: "USER_REGISTER", payload: response.data });
};

export const formRejected = () => (dispatch) => {
  dispatch({ type: "VALIDATE_FORM", payload: false });
};

export const isUserLogedIn = (isLoged) => async (dispatch) => {
  dispatch({ type: "IS_USER_LOGED_IN", payload: isLoged });
};

export const showUserRegister = () => async (dispatch) => {
  dispatch({ type: "SHOW_USER_REGISTER" });
};

/** Actions to products */
export const fetchGroupsAndCategories = () => async (dispatch, getState) => {
  await dispatch(fetchGroups());

  const products = getState().products.groups;
  const filter = products.filter((product) => product.id === 4);
  filter.forEach((product) => dispatch(fetchCategories(product.id)));
};

export const fetchGroups = () => async (dispatch) => {
  const response = await JsonServerApi.get("/groups");

  dispatch({ type: "FETCH_GROUPS", payload: response.data });
};

export const fetchCategories = (groupId) => async (dispatch) => {
  const response = await JsonServerApi.get(`/categories?groupId=${groupId}`);
  response.data.forEach((category) => dispatch(fetchProducts(category.id)));

  dispatch({ type: "FETCH_CATEGORIES", payload: response.data });
};

export const fetchProducts = (categoryId) => async (dispatch) => {
  const response = await JsonServerApi.get(
    `/products?categoryId=${categoryId}`
  );

  dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data.length > 0 && response.data,
  });
};

export const addProductToBasket = (product) => async (dispatch, getState) => {
  const lastProductItemAdded = [...getState().products.productsToBasket].pop();
  const amount = !lastProductItemAdded
    ? getState().products.productsWithChangeAmount
    : lastProductItemAdded.id !== product.id
    ? product.min
    : getState().products.productsWithChangeAmount;
  Object.assign(product, {
    amount: amount,
  });

  console.log(lastProductItemAdded, product);

  dispatch({ type: "ADD_PRODUCT_TO_BASKET", payload: product });
};

export const addChangeAmountProductToBasket = (amount) => async (dispatch) => {
  dispatch({
    type: "ADD_CHANGE_PRODUCT_AMOUNT_TO_BASKET",
    payload: amount,
  });
};
