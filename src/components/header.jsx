import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Signup from "./signup"; // Import the component you want to navigate to
// import Login from "./login"; // Import the login component

export const Header = (props) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleJoinUsClick = () => {
    // Toggle between showing signup and login components
    setShowSignup(!showSignup);
    setShowLogin(false); // Make sure login is hidden
  };

  const handleLoginClick = () => {
    // Toggle between showing login and signup components
    setShowLogin(!showLogin);
    setShowSignup(false); // Make sure signup is hidden
  };

  return (
    <header id="header">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/intro-bg.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path_to_your_image2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        {/* Add more Carousel.Item for additional images */}
      </Carousel>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* Use the handleJoinUsClick function as onClick event handler */}
                <button
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleJoinUsClick}
                >
                  Join Us
                </button>
                {/* <button
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleLoginClick}
                >
                  Login
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditionally render the Signup and Login components */}
      {showSignup && <Signup />}
      {/* {showLogin && <Login />} */}
    </header>
  );
};
