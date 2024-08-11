import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_DATA_ACTION,
  RESET_DATA,
  UPDATE_DATA,
} from "./constants/actionTypes";

function NewDataFetch() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  const handleFetchData = () => {
    dispatch({ type: FETCH_DATA_ACTION });
  };

  const handleResetData = () => {
    dispatch({ type: RESET_DATA });
  };

  const handleUpdateData = () => {
    const newData = {
      name: "Updated Data",
      value: "New Value",
    };
    dispatch({ type: UPDATE_DATA, payload: newData });
  };

  return (
    <div>
      <h1>Data Fetching</h1>
      <button onClick={handleFetchData}>Fetch Data</button>
      <button onClick={handleResetData}>Reset Data</button>
      <button onClick={handleUpdateData}>Update Data</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default NewDataFetch;
