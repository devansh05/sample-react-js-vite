import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import HorizontalScrollList from "../../components/horizontalScrollList/horizontalScrollList";
import useAxiosFetch from "../../customHooks/useAxiosFetch";
import { useSelector, useDispatch } from "react-redux";
import { updateSkill  } from "../../redux/reducers/skillsReducerSlice";
import { fetchDataRequest } from "../../redux/reducers/fetchApiReducerSlice";

//UseMemo
//Memo
//Lazy Suspense
//Redux
//useCallback

const Dashboard = () => {
  // const { data, loading, error } = useAxiosFetch("/endpoint");
  // const { apiData, loading, error } = useSelector((state) => state.data);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const dispatch = useDispatch();
  const skillSelected = useSelector((state) => state.skills.skill);

  useEffect(() => {
    console.log("LOG  skillSelected ", skillSelected);
  }, [skillSelected]);

  const skillsArr = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  const handleUpdateSkill = () => {
    const newSkill = {
      name: 'React',
      level: 'Advanced',
    };
    dispatch(updateSkill(newSkill)); // Dispatch the action to update the skill
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2>Alexa Skills</h2>
      <br />
      <h3>Top Skills</h3>
      <button onClick={handleUpdateSkill}>Update Skill</button>
      <HorizontalScrollList
        items={skillsArr}
      />
      <br />
      <h3>Latest Skills</h3>
      <HorizontalScrollList items={skillsArr} />
      {/* <h1>Data Fetched from API</h1> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <button onClick={() => dispatch(fetchDataRequest())}>Fetch Data</button> */}
    </div>
  );
};

export default Dashboard;
