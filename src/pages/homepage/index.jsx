import React from "react";
import styles from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import BookCover from "../../components/BookCover/BookCover";
import imgSrc from "../../assets/comingSoonComic.png";
import idw from "../../assets/idw.png";
import dc from "../../assets/dc.png";
import darkhorse from "../../assets/darkhorse.png";
import clown from "../../assets/clown.png";

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
        <div className={styles.comingSoon}>
          <div className={styles.first}>
            <span>Coming soon</span>
            <h2>Dr Strange</h2>
            <p>
              Doctor Strange is a multidimensional character with a rich history
              and a unique blend of mysticism, intellect, and heroism. His
              storylines often explore the concepts of magic, spirituality, and
              the balance between science and the supernatural, making him a
              beloved and iconic figure
            </p>
            <button>Preorder Character</button>
          </div>
          <div className={styles.second}>
            <span>Coming soon</span>
            <h2>Green Lantern</h2>
            <p>
              Green Lantern is a beloved and iconic superhero known for his
              distinct appearance, his incredible power ring, and his commitment
              to protecting the universe as a member of the Green Lantern Corps.
            </p>{" "}
            <button>Preorder Character</button>
          </div>
        </div>
        <div className={styles.bestSellingComics}>
          <h2>Best Selling Comics</h2>
          <div>
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={2}
              imgSrc={imgSrc}
            />
          </div>
          <div>
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={2}
              imgSrc={imgSrc}
            />
          </div>
        </div>
        <div className={styles.topComics}>
          <h3>Top comics in our radar</h3>
          <div className={styles.theComics}>
            <figure className={styles.marvel}>MARVEL</figure>
            <figure>
              <img src={dc} alt="Comic-Producers" />
            </figure>
            <figure>
              <img src={darkhorse} alt="Comic-Producers" />
            </figure>
            <figure>
              <img src={idw} alt="Comic-Producers" />
            </figure>
          </div>
        </div>
        <div className={styles.jokerComics}>
          <img src={clown} alt="joker" />
          <div>
            <p>
              In a world of villian and heroes, sometimes the villians smile the
              hardest
            </p>
            <button>Checkout the Joker Comics</button>
          </div>
        </div>
        <div className={styles.latestReleases}>
          <h2>Latest Releases</h2>
          <div>
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={2}
              imgSrc={imgSrc}
            />
          </div>
          <div>
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={4}
              imgSrc={imgSrc}
            />
            <BookCover
              name="Shuri The Warrior"
              price={3200}
              rating={2}
              imgSrc={imgSrc}
            />
          </div>
        </div>
        <div className={styles.joinCommunity}>
          <p>
            Join a community of comic enthusiats, dive into engaging
            storieslines and create your own adventures
          </p>
        </div>
      </main>
    </div>
  );
}
