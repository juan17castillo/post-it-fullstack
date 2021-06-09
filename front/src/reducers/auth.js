import * as actionType from "../constants/actionTypes";

const authReducer = (
  state = {
    authData: null,
    message: null,
    users: [],
  },
  action
) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };
    case actionType.AUTH_ERROR:
      return { ...state, message: action.errorMessage };
    case actionType.GET_USERS:
      return { ...state, users: action.payload };
    case actionType.DELETE_USER:
      return {
        ...state,
        users: state.users.data.filter((user) => user._id !== action.payload),
      };
    case actionType.RESET_PASSWORD:
      return {
        ...state,
        authData: action.data,
        message: null,
      };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, message: null, users: null };

    default:
      return state;
  }
};

export default authReducer;
