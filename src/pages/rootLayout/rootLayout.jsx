import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";
import styles from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
      <div className={styles.rootElements}>
        <Sidebar />
        <>
          <Header />
          <div className={styles.mainContent}>
            <Outlet />
          </div>
        </>
      </div>
    </div>
  );
};

export default RootLayout;
