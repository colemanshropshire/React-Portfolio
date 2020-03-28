import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const navigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log("error signing out, " + error);
      });
  };

  return (
    <div className="nav-bar">
      <div className="mobile-dropdown">
        {props.dropdownState === "hide" ? (
          <button onClick={props.dropdownOpen} className="dropdown-btn">
            <FontAwesomeIcon icon="bars" />
          </button>
        ) : (
          <button onClick={props.dropdownClose} className="dropdown-btn">
            <FontAwesomeIcon icon="window-close" />
          </button>
        )}
      </div>
      <div className="nav-wrapper" id={props.dropdownState}>
        <div className="top">
          Coleman Shropshire
          {props.loggedInStatus === "LOGGED_IN" ? (
            <a onClick={handSignOut}>
              <FontAwesomeIcon icon="sign-out-alt" />
            </a>
          ) : null}
        </div>
        <div className="bottom">
          <div className="nav-link-wrapper">
            <NavLink
              exact
              to="/"
              activeClassName="nav-link-active"
              onClick={props.dropdownClose}
            >
              Home
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink
              to="/about-me"
              activeClassName="nav-link-active"
              onClick={props.dropdownClose}
            >
              About
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink
              to="/contact"
              activeClassName="nav-link-active"
              onClick={props.dropdownClose}
            >
              Contact
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink
              to="/blog"
              activeClassName="nav-link-active"
              onClick={props.dropdownClose}
            >
              Blog
            </NavLink>
          </div>
          {props.loggedInStatus === "LOGGED_IN"
            ? dynamicLink("/portfolio-manager", "Portfolio Manager")
            : null}
        </div>
      </div>
    </div>
  );
};

export default withRouter(navigationComponent);
