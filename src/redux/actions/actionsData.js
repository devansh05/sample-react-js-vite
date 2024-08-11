import {
  FETCH_DATA_ACTION,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  RESET_DATA,
  UPDATE_DATA,
} from "../constants/actionTypes";

export const fetchDataAction = () => ({
  type: FETCH_DATA_ACTION,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const resetData = () => ({
    type: RESET_DATA,
  });
  
  export const updateData = (data) => ({
    type: UPDATE_DATA,
    payload: data,
  });
