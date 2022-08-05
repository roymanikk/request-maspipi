import React from "react";
import { useLocation } from "react-router-dom";

import Button from "elements/Button";
import BrandIcon from "./IconText";

export default function Header(props) {
  const location = useLocation();
  const getNavLinkClass = (path) =>
    path === location.pathname ? " active" : "";

  return (
    <header className="spacing-sm bg-dark position-fixed">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/prophecy-list")}`}>
                <Button className="nav-link" type="link" href="/prophecy-list">
                  prophecy list
                </Button>
              </li>
              <li
                className={`nav-item${getNavLinkClass(
                  "/create-your-prophecy"
                )}`}
              >
                <Button
                  className="nav-link"
                  type="link"
                  href="/create-your-prophecy"
                >
                  create your prophecy
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
