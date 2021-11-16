import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";
import "../pages/main";
import "./navbar.css";

const Navbar = () => {
  return (
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="/">
          Home
        </a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" aria-current="page" href="/">
          About
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="/">
          Shop
        </a>
      </li> */}
    </ul>
  );
};
export default Navbar;
