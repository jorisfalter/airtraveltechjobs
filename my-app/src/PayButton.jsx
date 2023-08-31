import React from "react";
import { Link } from "react-router-dom";
// import FlightTakeoff from "@material-ui/icons/";

const PayButton = (props) => {
  return (
    <Link to={props.link}>
      <button className="buyButton">
        Let's Do It!
        {/* &#9776; &#9992; */}
        {/* <FlightTakeoff /> */}
      </button>
    </Link>
  );
};

export default PayButton;
