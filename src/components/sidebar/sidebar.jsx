import React from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <div className={styles.sidebar}>
        <h3>Categories</h3>
        <ul>
          <li><Link to="/dashboard">Business & Finance</Link></li>
          <li><Link to="/dashboard">Communication</Link></li>
          <li><Link to="/dashboard">Education & Reference</Link></li>
          <li><Link to="/dashboard">Food & Drink</Link></li>
          <li><Link to="/dashboard">Games & Trivia</Link></li>
          <li><Link to="/dashboard">Health & Wellness</Link></li>
          <li><Link to="/dashboard">Novelty & Humor</Link></li>
          <li><Link to="/dashboard">Music & Audio</Link></li>
          <li><Link to="/dashboard">Home Services</Link></li>
          <li><Link to="/dashboard">Movies & TV</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;