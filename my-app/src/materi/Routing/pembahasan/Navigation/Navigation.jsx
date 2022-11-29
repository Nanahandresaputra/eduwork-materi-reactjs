import React from "react";
import "./nav.css";
import { faHouse, faUser, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div className="navBar">
        <Link to="/" className="link">
          {" "}
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
        <Link to="/contact" className="link">
          {" "}
          <FontAwesomeIcon icon={faScrewdriverWrench} /> Contact
        </Link>
        <Link to="/user" className="link">
          {" "}
          <FontAwesomeIcon icon={faUser} /> User
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
