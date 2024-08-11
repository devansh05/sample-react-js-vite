import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  RESET_DATA,
  UPDATE_DATA,
} from "../constants/actionTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_DATA:
      return {
        ...initialState,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
}
