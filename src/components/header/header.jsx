import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaTools } from "react-icons/fa";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navBarActionsContainer}>
        <Link to={"/dashboard"} className={styles.navBarActions}>
          <FaHome className="icon" />
          <span className={styles.labels}>Home</span>
        </Link>
      </div>
      <Link to={"/"} className={styles.navBarActions}>
        <span className={styles.labels}>Logout</span>
        <FaSignOutAlt className={styles.icon} />
      </Link>
    </div>
  );
};

export default Header;
