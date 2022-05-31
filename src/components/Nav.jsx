import React from "react";
import mokhalifa from "../assets/mo-khalifa.png";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar px-3 d-flex justify-content-between align-items-center text-white navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <a
            style={{
              textDecoration: "none",
              listStyle: "none",
              color: "inherit",
            }}
            class="navbar-brand fw-bold fs-2 text-light"
          >
            Mo-khalifa
          </a>
        </Link>

        <div className="cart-sections d-flex justify-content-between align-items-center">
          <Link to="cart">
            <div className="cart-icon pointer fs-2 text-info text-center m-3">
              <FaShoppingBag />
            </div>
          </Link>
          <div className="cart-nums fs-2 bg-warning text-dark rounded-pill p-1 text-info text-center">
            3
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
