import React from "react";
import styles from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
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
