import React, { useState } from "react";
import { motion } from "framer-motion";
import paletteImage from "./palette.jpg"; // Import the image

const Connect = () => {
  // State to control the modal
  const [showModal, setShowModal] = useState(false);
  // State for answer input
  const [answer, setAnswer] = useState("");
  // State for likes
  const [likes, setLikes] = useState(0);
  // State to hold questions and their corresponding answers
  const [questionAnswers, setQuestionAnswers] = useState({});

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle answer input change
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  // Function to handle like button click
  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  // Function to handle submitting the answer for the question of the day
  const submitAnswer = () => {
    if (answer.trim() !== "") {
      // Update the state with the submitted answer
      setQuestionAnswers({ ...questionAnswers, "Question of the Day": answer });
      // Reset the answer input
      setAnswer("");
    }
  };

  // Data for discussion categories
  const categories = [
    { id: 1, name: "General Discussions" },
    { id: 2, name: "Introduce Yourself" },
    { id: 3, name: "Feedback & Critiquing" },
    { id: 4, name: "Question of the Day" }
  ];

  return (
    <div id="connect">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="about-text text-center">
              <br /><br />
              <h2 className="with-pseudo-element">
                Connect With Us
              </h2>
              {/* Image */}
              <div className="text-center">
                <img src={paletteImage} alt="Artist's palette" className="img-fluid" style={{ maxWidth: "100%", marginLeft: "250px" }} />
              </div>
              <br />
              {/* Discussion categories */}
              <div className="discussion-categories mt-4 text-center" style={{ marginLeft: "400px" }}>
                {categories.map((category, index) => (
                  <React.Fragment key={category.id}>
                    <motion.button
                      className="btn btn-primary btn-lg m-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleModal}
                    >
                      {category.name}
                    </motion.button>
                    {index !== categories.length - 1 && <div style={{ marginBottom: "20px" }}></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
      <br />
      <br />
      {/* Question of the Day */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="question-box">
              <h2 className="question-title" style={{ fontSize: "3.0rem" }}>Question of the Day</h2>
              {/* Display submitted answer and like count */}
              <div>
                <p>{questionAnswers["Question of the Day"]}</p>
                {/* <button className="like-button" onClick={handleLikeClick}>
                  Like ({likes})
                </button> */}
              </div>
            </div>
            <h3>Which color makes your heart happy?</h3>
            <br/> 
            {/* Input field for answer */}
            <div className="answer-container">
              <label htmlFor="answer" className="answer-label">Your Answer:</label>
              <input
                type="text"
                id="answer"
                className="answer-input"
                placeholder="Type your answer here..."
                value={answer}
                onChange={handleAnswerChange}
              />
              {/* Like button */}
              <button className="like-button" onClick={handleLikeClick}>
                Like ({likes})
              </button>
            </div>
            <br />
            <div className="answer-container">
              <label htmlFor="answer" className="answer-label">Your Answer:</label>
              <input
                type="text"
                id="answer"
                className="answer-input"
                placeholder="Type your answer here..."
                value={answer}
                onChange={handleAnswerChange}
              />
              {/* Like button */}
              <button className="like-button" onClick={handleLikeClick}>
                Like ({likes})
              </button>
            </div>
            {/* Button to submit answer */}
            <button className="submit-button" onClick={submitAnswer}>
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
