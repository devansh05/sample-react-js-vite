import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUpdateSkill } from "../../redux/reducers/skillsReducerSlice";
function SkillDashboard() {
  //   const skill = useSelector((state) => state.skills.skill);
  const skill = useSelector((state) => state.skills.skill);
  const dispatch = useDispatch();

  const handleUpdateSkill = () => {
    const newSkill = {
      name: "React",
      level: "Advanced",
    };
    dispatch(requestUpdateSkill(newSkill));
  };

  return (
    <div>
      <h1>Current Skill</h1>
      <pre>{JSON.stringify(skill, null, 2)}</pre>
      <button onClick={handleUpdateSkill}>Update Skill</button>
    </div>
  );
}

export default SkillDashboard;
