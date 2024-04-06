import React, { useState } from 'react'
import { render } from 'react-dom'
//import {Text, TextInput, View} from 'react-native';
//import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function MySpace() {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState('')
  const [text, setText] = useState('');
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (


    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-text">
            <h2 className="text-center with-pseudo-element">MySpace</h2>
            <h2 style={{ fontSize: "2.0rem" }}>Add Image:</h2>
            <label htmlFor="answer" className="answer-label">
              Add a Title to your ArtPiece : <input name="myInput" />
            </label>

            <br />
            <br />
            
            <input type="file" onChange={handleChange} />
            <img src={file} />
            <br />
            <br />
            <h2>How did you feel before you started the art piece?</h2>
            <br></br>
            <h2>How did you feel now?</h2>
            <br></br>
            <h2>Give a description for your art piece if it were to be put up in an art gallery:</h2>

            <textarea
              rows={5}
              cols={35}
              placeholder={" "}
            />
            <br></br>
            <br></br>
            <div style={{ fontSize: "2.5rem" }}>
              <label style={{ fontSize: "2.5rem" }} htmlFor={'my-input'}>Enter text:    </label>
              <input style={{ fontSize: "2.5rem" }}
                id={'my-input'}
                type={'text'}
                value={state}
                placeholder={'Type here'}
                onChange={event => {
                  setState(event.target.value)
                }}
              />
              <br />
              <br />
              Hello {state} !
            </div>
            <br />
            <h3 style={{ fontSize: "2.5rem" }}>How are you feeling today?</h3>
          </div>
        </div>
      </div>
    </div >
  )
}