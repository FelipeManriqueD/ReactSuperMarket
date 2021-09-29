const initialState = {
  validForm: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "VALIDATE_FORM":
      return {
        ...state,
        validForm: action.payload,
      };
    default:
      return state;
  }
};
