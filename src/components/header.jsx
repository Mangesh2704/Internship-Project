import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Signup from "./signup"; // Import the component you want to navigate to

export const Header = (props) => {
  const [showSignup, setShowSignup] = useState(false);

  // Function to handle join us button click
  const handleJoinUsClick = () => {
    // Set showSignup to true to render the Signup component
    setShowSignup(true);
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
                {/* Use the Link component to redirect to Signup page */}
                <Link to="/signup" className="btn btn-custom btn-lg page-scroll">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Conditionally render the Signup component */}
      {showSignup && <Signup />}
    </header>
  );
};

export default Header;
