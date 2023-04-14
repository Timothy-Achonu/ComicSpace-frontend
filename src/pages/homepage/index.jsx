import React from "react";
import styles from "./home.module.css";
import Navbar from "./Navbar/Navbar.jsx";

export default function index() {
  return (
    <header className={styles.container}>
      <div className={styles.helpLangWrapper}>
        <select>
          Help
          <option>Help</option>
        </select>
        <select>
          <option>Language</option>
        </select>
      </div>
      <div className={styles.headerMidSection}>
        <Navbar />
      </div>
    </header>
  );
}
