import React from "react";
import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles["header"]}>
      <div>Icon</div>
      <div>Searchbar</div>
      <button>Login</button>
    </div>
  );
};

export default Header;
