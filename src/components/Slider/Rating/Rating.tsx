import React, { useEffect, useState } from "react";
import "./RatingStyles.scss";
import star from "../../../assets/star.svg";

function Rating({ sightName }: any) {
  const [rating, setRating] = useState("0");

  useEffect(() => {
    setRating(localStorage.getItem(sightName) || "0");
  }, [sightName]);

  function handleChange(e: any) {
    setRating(e.target.value);
    localStorage.setItem(sightName, e.target.value);
  }

  return (
    <div className="rating">
      <div className="rating__current">{rating}</div>
      <img className="rating__icon" src={star} alt="star" />
      <select name="select" onChange={handleChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default Rating;
