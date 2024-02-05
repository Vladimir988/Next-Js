import React from 'react';
import MyLink from "./MyLink";
import styles from "../styles/Navbar.module.css";

const Navbar = ({dark}) => {
  const rootClasses = [styles.navbar];
  if(dark) {
    rootClasses.push(styles.dark)
  }

  return (
    <div className={rootClasses.join(' ').trim()}>
      <MyLink href="/" text="Home"/>
      <MyLink href="/users" text="Users"/>
    </div>
  );
};

export default Navbar;