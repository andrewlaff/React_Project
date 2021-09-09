import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // allows card & all css props inside container
  return <div className={classes}>{props.children}</div>;
};
export default Card;
