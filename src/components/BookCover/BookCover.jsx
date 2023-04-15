import React from "react";
import styles from "./bookCover.module.css";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
// import { MdAddCircle } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";

function starsNumber(num) {
  const starsArray = [];
  for (let i = 0; i < num; i++) {
    starsArray.push(<AiFillStar key={i + "j"} />);
  }
  if (num < 5) {
    for (let i = num; i < 5; i++)
      starsArray.push(<AiOutlineStar key={i + "i"} />);
  }
  return starsArray;
}

export default function BookCover({ name, price, rating, imgSrc }) {
  const bgStyles = {
    background: `url(${imgSrc}) no-repeat center center / cover`,
  };
  return (
    <div style={bgStyles} className={styles.container}>
      <div className={styles.comicName}>{name}</div>
      <div className={styles.comicPrice}>
        <TbCurrencyNaira />
        {price} <span>(-5% discount)</span>
      </div>
      <div className={styles.comicRating}>
        {rating} stars rating <span>{starsNumber(rating)} </span>{" "}
      </div>
      <button className={styles.addToCartBtn}>
        Add to Cart <MdAddCircleOutline className={styles.addIcon} />{" "}
      </button>
    </div>
  );
}
