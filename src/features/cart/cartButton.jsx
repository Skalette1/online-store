import React from "react";
import { Link } from "react-router-dom";

export const cartButton = () => {
  return (
    <div>
      <Link to="cart">
        <img src="src/shared/assets/public api/Buy.svg" alt="" />
      </Link>
    </div>
  );
};
