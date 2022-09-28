import React from "react";
import styles from "./SideBar.module.scss";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div
      className={styles["side-bar"]}
      onClick={() => {
        alert("clicked!");
      }}
    >
      SideBar
    </div>
  );
};

export default SideBar;
