import React from "react";
import { Link } from "react-router-dom";

const PayButton = (props) => {
  return (
    <Link to={props.link}>
      <button>Buy Now</button>
    </Link>
  );
};

export default PayButton;
