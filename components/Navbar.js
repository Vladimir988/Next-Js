import React from 'react';
import MyLink from "./MyLink";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <MyLink href="/" text="Home"/>
      <MyLink href="/users" text="Users"/>
    </div>
  );
};

export default Navbar;