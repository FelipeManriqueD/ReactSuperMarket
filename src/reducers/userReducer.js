const initialState = {
  userRegister: {},
  response: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_USER_LOGIN":
      return {
        ...state,
        response: action.payload,
      };
    case "SHOW_USER_REGISTER":
      return {
        ...state,
        showLogin: false,
      };
    case "USER_REGISTER":
      return {
        ...state,
        userRegister: action.payload,
      };
    default:
      return state;
  }
};
