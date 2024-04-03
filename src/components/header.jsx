import React from "react";
import { Carousel } from "react-bootstrap";

export const Header = (props) => {
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
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Join Us
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
