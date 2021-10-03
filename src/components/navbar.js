import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container" style={{ marginTop: 30 }}>
      <Menu pointing secondary size="large" color="red">
        <Menu.Item classname="nav-link" name="Home" to="/home"></Menu.Item>
      </Menu>
    </div>
  );
};
export default Navbar;
