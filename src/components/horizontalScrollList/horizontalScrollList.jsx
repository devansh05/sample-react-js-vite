import React from "react";
import styles from "./horizontalScrollList.module.css";

const HorizontalScrollList = (props) => {
  const {items} = props;
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollList}>
        {items &&
          items.length &&
          items.map((item, index) => (
            <div key={index} className={styles.scrollItem}>
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HorizontalScrollList;
