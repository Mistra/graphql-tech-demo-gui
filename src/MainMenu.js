import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MenuHeader = ({ children }) => (
  <div class="row menu-header">
    <div class="col">
      <div class="menu-header-text">
        {children}
      </div>
    </div>
  </div>
);


const MenuEntry = ({ icon, children }) => (
  <div class="row menu-entry">
    <div class="col">
      <i class={icon} />
      <span class="menu-entry-text">
        {children}
      </span>
    </div>
  </div>
);

function Menu() {
  return (
    <div class="main-menu">
      <MenuHeader>
        DASHBOARD
      </MenuHeader>
      <Link to="/">
        <MenuEntry icon="fa fa-book">
          Books
        </MenuEntry>
      </Link>
      <MenuEntry icon="fa fa-user">
        Authors
      </MenuEntry>
      <MenuHeader>
        MODIFY
      </MenuHeader>
      <MenuHeader>
        EXTRA
      </MenuHeader>
    </div>
  );
}

export default Menu;