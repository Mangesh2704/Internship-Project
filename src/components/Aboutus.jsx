import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
    // State to control the modal
    const [showModal, setShowModal] = useState(false);
  
    // Function to toggle the modal
    const toggleModal = () => {
      setShowModal(!showModal);
    };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-text">
            <h2 className="text-center with-pseudo-element">About Us</h2>
            <h2 style={{ fontSize: "2.5rem" }}>What is Heartspace?</h2>
            <p>Heartspace is more than just a website; it's a sanctuary for healing and self-discovery. As individuals who have woven the threads of artistry into the fabric of our lives, both literally and metaphorically, we are dedicated to crafting an immersive haven. Our mission extends beyond mere digital presence; we are committed to fostering a nurturing environment where individuals can embark on transformative journeys of growth and healing.</p>
            <h3>What we do?</h3>
            <p>Through collaborative efforts and a shared passion for mental wellness and artistic expression, we strive to empower individuals to unleash their creativity, forge meaningful connections, and embark on a journey of self-discovery. Heartspace is not just a platform; it's a community where existing artists can cultivate connections and expand their presence, while newcomers to art therapy can discover its profound benefits.</p>
            <p>Together, we believe in the transformative power of art to inspire, uplift, and transcend boundaries. Heartspace is a refuge for all who seek solace and renewal through creative expression—a place where the canvas of life is painted with hope, resilience, and the vibrant hues of possibility.</p>
            {/* Text: You can connect with us */}
            <h2 className="text-center with-pseudo-element" style={{ fontSize: "2.5rem" }}>Connect With US!</h2>
            {/* Social media icons/links */}
            <div className="social-icons text-center">
              <a href="https://www.facebook.com/Heartspace" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" style={{ color: "#A8E6CF", fontSize: "5rem", marginRight: "1rem" }} /></a>
              <a href="https://twitter.com/Heartspace" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" style={{ color: "#A8E6CF", fontSize: "5rem", marginRight: "1rem" }} /></a>
              <a href="https://www.instagram.com/Heartspace" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" style={{ color: "#A8E6CF", fontSize: "5rem", marginRight: "1rem" }} /></a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
        <div className="about-text">
        <h2 style={{ fontSize: "3.0rem" }}>Artist of the Month</h2>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/john.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
          <br/>
            <h3>Art Therapy Benefits</h3>
            <p>John Doe is a contemporary visual artist known for his striking use of color and innovative mixed-media techniques. Born and raised in a small town, John discovered his passion for art at a young age and pursued formal training at the prestigious Art Institute. His works often explore themes of identity, nature, and the human experience, reflecting his diverse cultural influences and personal journey.</p>
           
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              <h3>Notable Achievements:</h3>
              <p><li>Winner of the 2023 Contemporary Artist Award.</li>
                <li>Featured in numerous solo and group exhibitions across the country. </li>
                <li>His artwork has been collected by private collectors and art enthusiasts worldwide.</li></p>
              <h3>Current Projects:</h3>
              <p>John is currently working on a series of large-scale canvases exploring the theme of environmental conservation. Through his art, he aims to raise awareness about pressing environmental issues and inspire positive change in society.</p>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Artist of the Month</h2>
            <img src="img/john.png" alt="" />
            <h3>John Doe</h3>
            <p>Full bio of the Artist of the Month...</p>
            {/* Additional details about the artist */}
          </div>
        </div>
      )}
      <br />
      <br />
      <div className="container">
        <div className="row">
        <div className="about-text">
        <h2 style={{ fontSize: "2.5rem" }}>Art Therapy Benefits</h2>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/art therapy infographic.png  " className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
          <br/>
            <h3>Art Therapy Benefits are:</h3>
            <p>John Doe is a contemporary visual artist known for his striking use of color and innovative mixed-media techniques. Born and raised in a small town, John discovered his passion for art at a young age and pursued formal training at the prestigious Art Institute. His works often explore themes of identity, nature, and the human experience, reflecting his diverse cultural influences and personal journey.</p>
           
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              <h3>Notable Achievements:</h3>
              <p><li>Winner of the 2023 Contemporary Artist Award.</li>
                <li>Featured in numerous solo and group exhibitions across the country. </li>
                <li>His artwork has been collected by private collectors and art enthusiasts worldwide.</li></p>
              <h3>Current Projects:</h3>
              <p>John is currently working on a series of large-scale canvases exploring the theme of environmental conservation. Through his art, he aims to raise awareness about pressing environmental issues and inspire positive change in society.</p>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Artist of the Month</h2>
            <img src="img/john.png" alt="" />
            <h3>John Doe</h3>
            <p>Full bio of the Artist of the Month...</p>
            {/* Additional details about the artist */}
          </div>
        </div>
      )}
      </div>    
  );
};

export default About;
