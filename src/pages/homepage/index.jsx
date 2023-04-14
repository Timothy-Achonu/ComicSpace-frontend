import React from "react";
import styles from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.helpLangWrapper}>
          <select>
            Help
            <option>Help</option>
            <option>Support</option>
          </select>
          <select>
            <option>English</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <div className={styles.headerMidSection}>
          <Navbar />
          <div className={styles.heroTextsButtonWrapper}>
            <p>Get Lost in the Pages of Exciting Comic Adventure</p>
            <p>
              Step into a world of action and excitement, join forces with
              legendary comic characters and unravel their stories and explore a
              multiverse of adventures, battles, and intrigues.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </header>
      <main>
        <div>
          
        </div>
      </main>
    </div>
  );
}
