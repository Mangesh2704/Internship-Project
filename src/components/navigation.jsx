import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/heARTspaceLogo.png"
              alt="Logo"
              className="logo"
              style={{ width: "150px", height: "auto", marginTop: "-10px" }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/" className="page-scroll blue-text">
                Home
                <img
                  src="img/icon/home icon.png"
                  alt="Home"
                  className="icon-img"
                />
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" className="page-scroll blue-text">
                About Us
                <img
                  src="img/icon/about us or info sign.png"
                  alt="About Us"
                  className="icon-img"
                />
              </Link>
            </li>
            <li>
              <Link to="/connect" className="page-scroll blue-text">
                Connect
                <img
                  src="img/icon/connect-communityforum icon.png"
                  alt="Connect"
                  className="icon-img"
                />
              </Link>
            </li>
            <li>
              <Link to="/create" className="page-scroll blue-text">
                Create
                <img
                  src="img/icon/create icon.png"
                  alt="Create"
                  className="icon-img"
                />
              </Link>
            </li>
            <li>
              <Link to="/grow" className="page-scroll blue-text">
                Grow
                <img
                  src="img/icon/grow icon.png"
                  alt="Grow"
                  className="icon-img"
                />
              </Link>
            </li>
            <li>
              <Link to="/myspace" className="page-scroll blue-text">
                MySpace
                <img
                  src="img/icon/myspace.png"
                  alt="MySpace"
                  className="icon-img"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
