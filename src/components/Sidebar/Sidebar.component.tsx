import React from "react";
import { Form, User } from "~/components";

import userData from "~/data/userData.json";

import styles from "./Siedebar.module.css";

const Sidebar = () => {
  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <User
          name={userData.name}
          email={userData.email}
          image={userData.url}
          logout={handleLogout}
        />
      </div>
      <div className={styles.center}><Form /></div>
    </div>
  );
};

export default Sidebar;
