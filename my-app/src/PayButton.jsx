import React from "react";
import { Link } from "react-router-dom";

const PayButton = (props) => {
  return (
    <Link to={props.link}>
      <button className="buyButton">Buy Now</button>
    </Link>
  );
};

export default PayButton;
